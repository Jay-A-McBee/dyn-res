self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/bundle.js',
        '/0.bundle.js',
        '/2.bundle.js',
        '/3.bundle.js',
        '/4.bundle.js',
        '/5.bundle.js',
        '/6.bundle.js',
        '/36deb8949e99886edb7b3a827fbcc0ec.png',
        '/4a86c0f65974b5f8c30611754b30cdd1.png',
        '/aa8d3b7e4caef1dd9962b910ab47b02a.jpg',
        '/favicon.ico'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request)
          .then(function(response) {
            // response may be used only once
            // we need to save clone to put one copy in cache
            // and serve second one
            const matches = [
              /\/$/,
              /\/index\.html$/,
              /\/bundle\.js$/,
              /\/0\.bundle.js$/,
              /\/2\.bundle.js$/,
              /\/3\.bundle.js$/,
              /\/4\.bundle.js$/,
              /\/5\.bundle.js$/,
              /\/6\.bundle.js$/,
              /\/36deb8949e99886edb7b3a827fbcc0ec.png$/,
              /\/4a86c0f65974b5f8c30611754b30cdd1.png$/,
              /\/aa8d3b7e4caef1dd9962b910ab47b02a.jpg$/,
              /\/favicon.ico$/
            ];

            if (matches.some(regex => regex.test(event.request.url)) {
              let responseClone = response.clone();
              caches.open('v1').then(function(cache) {
                cache.put(event.request, responseClone);
              });
            }
            return response;
          })
          .catch(function() {
            return caches.match('');
          });
      }
    })
  );
});
