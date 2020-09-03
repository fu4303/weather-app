const staticCacheName = 'static_i';
const dynamicCacheName = 'dynamic_i';
const assets = [
   '/',
   '/favicon.ico',
   '/dist/bundle.js',
   '/dist/bundle.css',
   'https://kit.fontawesome.com/885fbd8d84.js',
   '/vendor/css/weather-icons.min.css',
   '/vendor/font/weathericons-regular-webfont.eot',
   '/vendor/font/weathericons-regular-webfont.svg',
   '/vendor/font/weathericons-regular-webfont.ttf',
   '/vendor/font/weathericons-regular-webfont.woff',
   '/vendor/font/weathericons-regular-webfont.woff2',
];

self.addEventListener('install', (e) => {
   e.waitUntil(
      caches.open(staticCacheName).then((cache) => {
         cache.addAll(assets);
      })
   );
});

self.addEventListener('activate', (e) => {
   e.waitUntil(
      caches.keys().then((keys) => {
         Promise.all(
            keys
               .filter((key) => key !== staticCacheName)
               .map((key) => caches.delete(key))
         );
      })
   );
});

self.addEventListener('fetch', (e) => {
   if (!(e.request.url.indexOf('http') === 0)) return;

   e.respondWith(
      caches.match(e.request).then((cacheRes) => {
         return (
            cacheRes ||
            fetch(e.request).then(async (fetchRes) => {
               return await caches.open(dynamicCacheName).then((cache) => {
                  cache.put(e.request.url, fetchRes.clone());
                  return fetchRes;
               });
            })
         );
      })
   );
});
