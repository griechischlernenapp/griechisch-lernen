// Griechisch Lernen — Service Worker
// Version hochzählen bei jedem Update auf GitHub!
var CACHE_NAME = 'griechisch-lernen-v1';

var STATIC_FILES = [
  '/griechisch-lernen/',
  '/griechisch-lernen/index.html',
  '/griechisch-lernen/vokabeln.js',
  '/griechisch-lernen/geschichten.js',
  '/griechisch-lernen/alphabet.js',
  '/griechisch-lernen/manifest.json',
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
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// Bei Anfragen: erst Cache, dann Netzwerk
// Bilder: Cache first (schnell)
// HTML/JS: Network first (immer aktuell wenn online)
self.addEventListener('fetch', function(event) {
  var url = event.request.url;

  // Bilder: Cache first
  if(url.includes('/bilder/')) {
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        if(cached) return cached;
        return fetch(event.request).then(function(response) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
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
      var clone = response.clone();
      caches.open(CACHE_NAME).then(function(cache) {
        cache.put(event.request, clone);
      });
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
