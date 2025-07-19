const CACHE_NAME = 'berry-notes-cache-v1;
const urlsToCache = [
  '/',
  '/index.html',
  '/index.css',
  '/index.js',
  '/index-2.html',
  '/index-2.css',
  '/index-2.js',
  '/index-3.html',
  '/index-3.css',
  '/index-3.js',
  '/checked.png',
  '/delete.png',
  '/EDIT.png',
  '/houses.png',
  '/logo.png',
  '/Red Organic Berries Fruit Logo.png',
  '/straw.png',
  '/unchecked.png',
];

selfaddEventListener('install',event =>{
 event.waitUntil(
  caches.opeb(CACHE_NAME).then(cache =>{
   return cache.addAll(urlsToCache);
  })
 );
});

self.addEventListener'install',event =>{
 event.respondWith(
  caches.match(event.request).then(response =>
{
   return response // fetch(event.request);
  })
 );
});
  