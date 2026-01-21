const CACHE_NAME = "gymph-cache-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./script.js",
  "./style.css",

  // icons
  "./Assets/pause.png",
  "./Assets/play-button.png",
  "./Assets/fast-forward-button.png",
  "./Assets/rewind.png",
  "./Assets/background.png",


  // music files
  './Music/2hollis - poster boy (SPOTISAVER).mp3',
   './Music/3OH!3 - DONTTRUSTME (SPOTISAVER).mp3',
    './Music/alt! - RAHHHH (SPOTISAVER).mp3',
     './Music/Bring Me The Horizon - Throne (SPOTISAVER).mp3',
      './Music/Chris Grey, Kryd, R3BEL - LET THE WORLD BURN (Hoodtrap Mylancore Remix) (SPOTISAVER).mp3',
       './Music/Evanescence - Bring Me To Life (SPOTISAVER).mp3',
        './Music/Evanescence - Going Under (SPOTISAVER).mp3',
         './Music/HARDEST - Bubblegum Bitch - Hardstyle (SPOTISAVER).mp3',
          './Music/Hardstylerzz - E.T(SPOTISAVER).mp3',
           './Music/Hardstylerzz - PLAY HARD (SPOTISAVER).mp3',
            './Music/Lil Texas - Die Young - Slowed (SPOTISAVER).mp3',
             './Music/Limp Bizkit - Break Stuff (SPOTISAVER).mp3',
              "./Music/Limp Bizkit - Rollin' (Air Raid Vehicle) (SPOTISAVER).mp3",
               './Music/Linkin Park - Crawling (SPOTISAVER).mp3',
                './Music/Linkin Park - Faint (SPOTISAVER).mp3',
                 './Music/Linkin Park - In the End (SPOTISAVER).mp3',
                  './Music/Linkin Park - Lying from You (SPOTISAVER).mp3',
                   './Music/Linkin Park - Numb (SPOTISAVER).mp3',
                    './Music/Skillet - Monster (SPOTISAVER).mp3',
                     "./Music/Snow Strippers, Lil Uzi Vert - It's A Dream (feat.LilUziVert)(SPOTISAVER).mp3",
                      './Music/Three Days Grace - Animal I Have Become (SPOTISAVER).mp3',
                       './Music/Three Days Grace - I Am Machine (SPOTISAVER).mp3',
                        './Music/Three Days Grace - I Hate Everything About You (SPOTISAVER).mp3',
                         './Music/Three Days Grace - Infra-Red (SPOTISAVER).mp3',
                          './Music/Three Days Grace - So Called Life (SPOTISAVER).mp3',
                           './Music/Three Days Grace - Time of Dying (SPOTISAVER).mp3'
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
