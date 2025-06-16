self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("math-quiz").then(function(cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./styles/style.css",
        "./scripts/main.js",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});