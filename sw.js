const CACHE_NAME = "worldwonders-cache-v1";

// जितनी files offline में चलानी हैं
const FILES_TO_CACHE = [
  "worldwonders.html",
  "worldwonders.css",
  "worldwonders.js",
  "worldwonders.json",
  "manifest.json",
  "icon-192.png",
  "icon-512.png"
];

// 📦 Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 🔄 Activate Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 🌐 Fetch (Offline support)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});