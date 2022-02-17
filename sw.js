this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
      
        '/pwa-bootstrap/index.html',
        '/pwa-bootstrap/pagehorsligne.html',
        '/pwa-bootstrap/index.js',
        '/pwa-bootstrap/agadir.jpeg',
        '/pwa-bootstrap/tanger.jpeg',
        '/pwa-bootstrap/marakech.jpeg',
       '/pwa-bootstrap/icon1.png',
        '/pwa-bootstrap/icon-192x192.png',
        '/pwa-bootstrap/icon-256x256.png',
        '/pwa-bootstrap/icon-384x384.png',
        '/pwa-bootstrap/icon-512x512.png',
        '/pwa-bootstrap/bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js',
        '/pwa-bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css',
        '/pwa-bootstrap/icons-1.7.2/font/bootstrap-icons.css'
        
          
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {

  console.log("Fetching ..." + event.request.url);

  event.respondWith(caches.match(event.request).then(function(response) {
    
    if (response !== undefined) {
      return response;
    } else {

      console.log("Fetching from fetch ..." + event.request.url);

      return fetch(event.request);
    }
  }));
});

async function cacheOrNetwork(request) {
  try {
    return await fromCache(request);
  } catch {
    return await fetch(request);
  }
};

async function fromCache(request) {
  const cache = await caches.open('v1');
  const matching = await cache.match(request);
  return matching || Promise.reject('no-match');
}

function fallbackVersPageHorsLigne() {
return caches.match("/pwa-bootstrap/pagehorsligne.html");
}


self.addEventListener('push', function (e) {
  console.log("push recu: " + e);
  envoyerNotification();
});


function envoyerNotification() {
  if (Notification.permission === 'granted') {
      var options = {
          body: 'Ma première notification',
          requireInteraction: true
      };

      self.registration.showNotification('Hello', options);
  } else {
      console.log("aucune notification car non permis");
  }
}

