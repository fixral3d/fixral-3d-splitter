// Fixral servis çalışanı: uygulama ana ekrana eklenebilsin ve bir kez açıldıktan sonra çevrimdışı da
// çalışsın. Sayfa (index.html) önce ağdan gelir (yeni sürüm hemen görünür), yoksa önbellekten.
// Adı karma içeren derleme dosyaları (JS, CSS, WASM) değişmez: önce önbellekten verilir.
// Önbellek adı sürümü taşır (kayıt: sw.js?v=X.Y.Z); yeni sürüm etkinleşince eski önbellekler silinir.
const CACHE = 'fixral-' + (new URL(self.location.href).searchParams.get('v') || 'dev');
const CORE = ['./', './manifest.webmanifest', './favicon.svg', './favicon-32.png', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('fixral-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./', copy));
          return res;
        })
        .catch(() => caches.match('./')),
    );
    return;
  }
  e.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        }),
    ),
  );
});
