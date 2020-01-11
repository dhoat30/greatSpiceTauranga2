const cacheName = 'v2';

const cacheAssets = [
  'index.html',
  '/js/main.js',
	'/photos/Restaurant-photo800px.jpg',
	'/photos/menu-log-award.png',
	'/photos/khem-family400px.jpg', 
	'/photos/hours-section400px.jpg', 
	'/photos/hero-img400px.jpg',
	'/photos/about-us-background400px.jpg', 
	'/photos/dine-in-menu.jpg', 
	'/photos/takeaway-menu-flex.jpg'
];

// Call Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
