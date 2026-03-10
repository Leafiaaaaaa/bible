// sw.js - 網路優先模式（不進行任何快取）
self.addEventListener('install', () => {
  self.skipWaiting(); // 強制跳過等待，立即更新
});

self.addEventListener('activate', () => {
  console.log('PWA 已啟用：網路優先模式');
});

// 攔截請求，但不做快取，直接去網路上抓
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
