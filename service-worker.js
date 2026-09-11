// Griechisch Lernen — Service Worker
// Version hochzählen bei jedem Update auf GitHub!
var CACHE_NAME = 'griechisch-lernen-v12';

var STATIC_FILES = [
  '/griechisch-lernen/',
  '/griechisch-lernen/index.html',
  '/griechisch-lernen/vokabeln.js',
  '/griechisch-lernen/geschichten.js',
  '/griechisch-lernen/alphabet.js',
  '/griechisch-lernen/comics.js',
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

  // Bilder und Aussprache-Schnipsel: Cache first
  if(url.indexOf('/bilder/') >= 0 || url.indexOf('/ton/') >= 0) {
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
  event.respondWith(
    fetch(event.request).then(function(response) {
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
