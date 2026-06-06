// 自卸载：清除旧 Service Worker 和所有缓存
self.addEventListener('install', function() { self.skipWaiting(); });
self.addEventListener('activate', function() {
  self.registration.unregister();
  caches.keys().then(function(names) {
    names.forEach(function(name) { caches.delete(name); });
  });
  self.clients.matchAll().then(function(clients) {
    clients.forEach(function(client) { client.navigate(client.url); });
  });
});
