const CACHE_NAME = 'bible-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/service-worker.js',
  '/manifest.json'
  // Adicione outros recursos se tiver, como '/style.css', '/icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
