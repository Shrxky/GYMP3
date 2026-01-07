const CACHE_NAME = "gymph-cache-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./script.js",
  "./style.css",

  // icons
  "./Assets/pause.png",
  "./Assets/play-button.png",

  // music files
  "./Music/Animal_I_have_become.mp3",
  "./Music/Monster.mp3",
  "./Music/Let_The_world_Burn.mp3",
  "./Music/Faint.mp3",
  "./Music/Rollin.mp3",
  "./Music/Crawling.mp3",
  "./Music/Fighting_Myself.mp3",
  "./Music/I_Hate_Everything_About_You.mp3",
  "./Music/Malo_Tebya.mp3",
  "./Music/In_The_End.mp3"
];

// Install and cache everything
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Serve cached files when offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
