/* Retire the obsolete Monetag service worker previously served as /sw.js. */
self.addEventListener('install', function (event) {
  event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', function (event) {
  event.waitUntil(self.registration.unregister());
});