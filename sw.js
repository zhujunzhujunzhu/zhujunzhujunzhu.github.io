/*
 * @Description
 * @Autor 朱俊
 * @Date 2020-07-25 15:31:55
 * @LastEditors 朱俊
 * @LastEditTime 2020-07-25 19:58:38
 */
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js'
);
var cacheStorageKey = 'minimal-pwa-1';
var cacheList = ['/', 'index.html', 'main.css', 'zj.png'];
self.addEventListener('install', (e) => {
  // 这个waitUntil 基本的作用是设置需要缓存的文件的 这里可以看到的两个api 一个是cache.addAll 另一个是 self.skipWaiting  跳过等待
  e.waitUntil(
    caches
      .open(cacheStorageKey)
      .then((cache) => cache.addAll(cacheList))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      if (response != null) {
        return response;
      }
      return fetch(e.request.url);
    })
  );
});
// 当重新激活时 需要判断当前版本的key的 如果不同于当前版本的话 就是需要重新的进行缓存的  并将之前版本的删除了的
self.addEventListener('activate', function (e) {
  e.waitUntil(
    //获取所有cache名称
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          // 获取所有不同于当前版本名称cache下的内容
          cacheNames
            .filter((cacheNames) => {
              return cacheNames !== cacheStorageKey;
            })
            .map((cacheNames) => {
              return caches.delete(cacheNames);
            })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

/**
 * 确实通过这样的动手的实践我现在对于pwa有了一个基本的认识的
 * 现在
 */
