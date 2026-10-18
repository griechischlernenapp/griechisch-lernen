// Griechisch Lernen — Service Worker
// Version hochzählen bei jedem Update auf GitHub!
var CACHE_NAME = 'griechisch-lernen-v97';

var STATIC_FILES = [
  '/griechisch-lernen/',
  '/griechisch-lernen/index.html',
  '/griechisch-lernen/vokabeln.js',
  '/griechisch-lernen/geschichten.js',
  '/griechisch-lernen/alphabet.js',
  '/griechisch-lernen/comics.js',
  '/griechisch-lernen/zahlenkreise.js',
  '/griechisch-lernen/schreiben.js',
  '/griechisch-lernen/wortspiele.js',
  '/griechisch-lernen/impressum.html',
  '/griechisch-lernen/manifest.json',
  // Die Buchstaben des Alphabets werden gesetzt, nicht mehr als Bilder
  // geladen. Ohne diese Schrift im Cache waeren sie offline in der
  // Ersatzschrift zu sehen.
  '/griechisch-lernen/schrift/comfortaa-griechisch-700.woff2',
];

// Beim Installieren: alle statischen Dateien cachen
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('Cache wird gefüllt...');
      return cache.addAll(STATIC_FILES);
    })
  );
  self.skipWaiting();
});

// Beim Aktivieren: alte Caches löschen
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        // HB_CACHE bleibt stehen: dort liegen die Hörbücher, die der
        // Nutzer selbst zum Offline-Hören gespeichert hat. Die dürfen
        // bei einem App-Update nicht verschwinden.
        keys.filter(function(key) {
              return key !== CACHE_NAME && key !== 'griechisch-hoerbuch';
            })
            .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// Gespeicherte Hörbuch-Kapitel ausliefern.
// Der Audio-Player fragt Dateien stückweise an ("Range: bytes=1234-").
// Eine ganze Antwort aus dem Cache genügt manchen Browsern dafür nicht —
// deshalb schneiden wir das verlangte Stück selbst heraus und antworten
// mit 206, so wie es ein Server täte. Ohne das bleibt der Player auf
// iPhone und iPad stumm.
var HB_CACHE = 'griechisch-hoerbuch';

function hoerbuchLiefern(request) {
  var bereich = request.headers.get('range');
  return caches.open(HB_CACHE).then(function(cache) {
    return cache.match(request.url).then(function(treffer) {
      if(!treffer) return fetch(request);          // nicht gespeichert → Netz
      if(!bereich) return treffer;
      return treffer.arrayBuffer().then(function(puffer) {
        var m = /bytes=(\d*)-(\d*)/.exec(bereich);
        var von = m && m[1] ? parseInt(m[1], 10) : 0;
        var bis = m && m[2] ? parseInt(m[2], 10) : puffer.byteLength - 1;
        if(bis >= puffer.byteLength) bis = puffer.byteLength - 1;
        if(von > bis) von = 0;
        return new Response(puffer.slice(von, bis + 1), {
          status: 206,
          statusText: 'Partial Content',
          headers: {
            'Content-Type':   'audio/mpeg',
            'Content-Length': String(bis - von + 1),
            'Content-Range':  'bytes ' + von + '-' + bis + '/' + puffer.byteLength
          }
        });
      });
    });
  }).catch(function() { return fetch(request); });
}

// Bei Anfragen: erst Cache, dann Netzwerk
// Bilder: Cache first (schnell)
// HTML/JS: Network first (immer aktuell wenn online)
self.addEventListener('fetch', function(event) {
  var url = event.request.url;

  // Hörbücher werden NIE von selbst gecacht — sie sind zusammen viele
  // Dutzend Megabyte. Nur was der Nutzer bewusst über "Für unterwegs
  // speichern" abgelegt hat, liegt im Cache HB_CACHE und wird von hier
  // ausgeliefert.
  if(url.indexOf('/hoerbuch/') >= 0 && url.indexOf('.mp3') >= 0) {
    event.respondWith(hoerbuchLiefern(event.request));
    return;
  }
  if(event.request.headers.get('range')) {
    return;   // ohne respondWith geht die Anfrage normal ans Netz
  }

  // Bilder und Aussprache-Schnipsel: Cache first.
  //
  // Eine Ausnahme: ton/index.json ist keine Aufnahme, sondern das
  // VERZEICHNIS dazu - es ordnet jedem griechischen Text seine MP3 zu.
  // Liegt es fest im Speicher, erfaehrt die App von neuen Toenen nie:
  // die MP3 liegt auf dem Server, aber niemand weiss davon, und der
  // Lautsprecherknopf bleibt aus. Genau das ist mit den Zahlen
  // passiert. Das Verzeichnis geht deshalb den Netz-zuerst-Weg,
  // mit dem Speicher als Rueckfall, wenn kein Netz da ist.
  // Verzeichnisse sind keine Aufnahmen: sie sagen, WAS es gibt.
  // Liegen sie fest im Speicher, erfaehrt die App von neuen Toenen,
  // neuen Hoerbuechern und neuen Kapiteln nie.
  //
  // ton/index.json               ordnet jedem Text seine MP3 zu
  // hoerbuch/index.json          welche Buecher und Kapitel es gibt
  // hoerbuch/*/text.json         die Mitlese-Texte eines Buches
  // bilder/ausmalheft/index.json welche Ausmalblaetter es gibt
  //
  // Das Ausmalheft liegt unter /bilder/ - ohne die eigene Zeile fiele
  // sein Verzeichnis unter die Bilderregel gleich darunter und bliebe
  // fuer immer im Speicher. Ein neues Blatt waere dann hochgeladen,
  // aber in der App unsichtbar.
  var istVerzeichnis = url.indexOf('/ton/index.json') >= 0
                    || url.indexOf('/hoerbuch/index.json') >= 0
                    || url.indexOf('/bilder/ausmalheft/index.json') >= 0
                    || /\/hoerbuch\/[^\/]+\/text\.json/.test(url);

  if(!istVerzeichnis &&
     (url.indexOf('/bilder/') >= 0 || url.indexOf('/ton/') >= 0)) {
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        if(cached) return cached;
        return fetch(event.request).then(function(response) {
          if(response && response.ok) {
            var clone = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, clone);
            });
          }
          return response;
        }).catch(function() {
          return new Response('', {status: 404});
        });
      })
    );
    return;
  }

  // HTML & JS: Network first, Cache als Fallback
  //
  // "Netz zuerst" allein reicht bei den Verzeichnissen NICHT. GitHub
  // Pages liefert statische Dateien mit Cache-Control: max-age=600
  // aus - zehn Minuten lang beantwortet der Browser das fetch() aus
  // seinem eigenen HTTP-Speicher, ohne den Server zu fragen, und der
  // Service Worker merkt davon nichts. Am 10.10.2026 sah es deshalb
  // aus, als waere ein Hochladen nicht angekommen: die Dateien lagen
  // laengst auf dem Server.
  //
  // cache: "no-cache" heisst nicht "nicht speichern", sondern "immer
  // nachfragen": der Browser schickt die Anfrage mit If-None-Match
  // los und bekommt meist ein leeres 304 zurueck. Kostet ein paar
  // Byte, spart das Raetselraten.
  //
  // Nur fuer die Verzeichnisse, und nur fuer echte Abfragen - eine
  // Navigationsanfrage darf man nicht mit eigenem init neu bauen.
  var frisch = (istVerzeichnis && event.request.mode !== 'navigate')
             ? { cache: 'no-cache' } : undefined;
  event.respondWith(
    fetch(event.request, frisch).then(function(response) {
      // Nur erfolgreiche Antworten ablegen. Sonst wandert ein 404 in den
      // Cache und wird spaeter ausgeliefert, obwohl die Datei laengst da ist.
      if(response && response.ok && event.request.method === 'GET') {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, clone);
        });
      }
      return response;
    }).catch(function() {
      return caches.match(event.request).then(function(cached) {
        return cached || new Response('Offline — bitte einmal mit Internet öffnen!', {
          status: 503,
          headers: {'Content-Type': 'text/plain; charset=utf-8'}
        });
      });
    })
  );
});
