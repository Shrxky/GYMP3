const playButton = document.getElementById("playMusic");
const skipButton = document.getElementById("skipMusic");
const backButton = document.getElementById("backButton");
const songTitle = document.getElementById("songTitle");
const artistTitle = document.getElementById("artist");
const icon = document.getElementById("icon");
const shuffleBtn = document.getElementById("shuffle");

const srcList = [
    {
        "title":" poster boy",
        "artist":"2hollis ",
        "src":"Music/2hollis - poster boy (SPOTISAVER).mp3"
    },
    {
        "title":" DONTTRUSTME",
        "artist":"3OH!3 ",
        "src":"Music/3OH!3 - DONTTRUSTME (SPOTISAVER).mp3"
    },
    {
        "title":" RAHHHH",
        "artist":"alt! ",
        "src":"Music/alt! - RAHHHH (SPOTISAVER).mp3"
    },
    {
        "title":" Throne",
        "artist":"Bring Me The Horizon ",
        "src":"Music/Bring Me The Horizon - Throne (SPOTISAVER).mp3"
    },
    {
        "title":" LET THE WORLD BURN",
        "artist":"Chris Grey, Kryd, R3BEL ",
        "src":"Music/Chris Grey, Kryd, R3BEL - LET THE WORLD BURN (Hoodtrap Mylancore Remix) (SPOTISAVER).mp3"
    },
    {
        "title":" Bring Me To Life",
        "artist":"Evanescence ",
        "src":"Music/Evanescence - Bring Me To Life (SPOTISAVER).mp3"
    },
    {
        "title":" Going Under",
        "artist":"Evanescence ",
        "src":"Music/Evanescence - Going Under (SPOTISAVER).mp3"
    },
    {
        "title":" Bubblegum Bitch ",
        "artist":"HARDEST ",
        "src":"Music/HARDEST - Bubblegum Bitch - Hardstyle (SPOTISAVER).mp3"
    },
    {
        "title":" ET",
        "artist":"Hardstylerzz ",
        "src":"Music/Hardstylerzz - E.T(SPOTISAVER).mp3"
    },
    {
        "title":" PLAY HARD",
        "artist":"Hardstylerzz ",
        "src":"Music/Hardstylerzz - PLAY HARD (SPOTISAVER).mp3"
    },
    {
        "title":" Die Young ",
        "artist":"Lil Texas ",
        "src":"Music/Lil Texas - Die Young - Slowed (SPOTISAVER).mp3"
    },
    {
        "title":" Break Stuff ",
        "artist":"Limp Bizkit ",
        "src":"Music/Limp Bizkit - Break Stuff (SPOTISAVER).mp3"
    },
    {
        "title":" Rollin' (Air Raid Vehicle)",
        "artist":"Limp Bizkit ",
        "src":"Music/Limp Bizkit - Rollin' (Air Raid Vehicle) (SPOTISAVER).mp3"
    },
    {
        "title":" Crawling ",
        "artist":"Linkin Park ",
        "src":"Music/Linkin Park - Crawling (SPOTISAVER).mp3"
    },
    {
        "title":" Faint",
        "artist":"Linkin Park ",
        "src":"Music/Linkin Park - Faint (SPOTISAVER).mp3"
    },
    {
        "title":" In the End",
        "artist":"Linkin Park ",
        "src":"Music/Linkin Park - In the End (SPOTISAVER).mp3"
    },
    {
        "title":" Lying from You ",
        "artist":"Linkin Park ",
        "src":"Music/Linkin Park - Lying from You (SPOTISAVER).mp3"
    },
    {
        "title":" Numb",
        "artist":"Linkin Park ",
        "src":"Music/Linkin Park - Numb (SPOTISAVER).mp3"
    },
    {
        "title":" Monster",
        "artist":"Skillet ",
        "src":"Music/Skillet - Monster (SPOTISAVER).mp3"
    },
    {
        "title":" It's A Dream",
        "artist":"Snow Strippers, Lil Uzi Vert ",
        "src":"Music/Snow Strippers, Lil Uzi Vert - It's A Dream (feat.LilUziVert)(SPOTISAVER).mp3"
    },
    {
        "title":" Animal I Have Become",
        "artist":"Three Days Grace ",
        "src":"Music/Three Days Grace - Animal I Have Become (SPOTISAVER).mp3"
    },
    {
        "title":" I Am Machine",
        "artist":"Three Days Grace ",
        "src":"Music/Three Days Grace - I Am Machine (SPOTISAVER).mp3"
    },
    {
        "title":" I Hate Everything About You",
        "artist":"Three Days Grace ",
        "src":"Music/Three Days Grace - I Hate Everything About You (SPOTISAVER).mp3"
    },
    {
        "title":" Infra red",
        "artist":"Three Days Grace ",
        "src":"Music/Three Days Grace - Infra-Red (SPOTISAVER).mp3"
    },
    {
        "title":" So Called Life",
        "artist":"Three Days Grace ",
        "src":"Music/Three Days Grace - So Called Life (SPOTISAVER).mp3"
    },
    {
        "title":" Time of Dying",
        "artist":"Three Days Grace ",
        "src":"Music/Three Days Grace - Time of Dying (SPOTISAVER).mp3"
    }
];

//USED FOR TESTING AUDIO FILES
/*
const srcList = [
    {
        "title":"TEST",
        "artist":"TEST",
        "src":"TestMedia/countdown7.mp3"
    }
]
*/

let current_song = 0;
let audio;
let isPlaying = false;
let shuffleMode = false;
let previousSong = 0;
let imgNumber = 1;

audio = new Audio(srcList[current_song].src);
audio.onended = nextSong;

function playSong(){
    console.log("Song is playing");
    isPlaying = true;
    audio.play();
    playButton.innerHTML = "<img class = 'btn' src = 'Assets/pause.png'>";
    songTitle.innerHTML = srcList[current_song].title;
    imgNumber = Math.round(current_song % 5) + 1;
    console.log(imgNumber);
    icon.src = `Assets/Icons/Icon${imgNumber}.png`;
    artistTitle.textContent = srcList[current_song].artist.toUpperCase();
    document.title = srcList[current_song].title;
}

function pauseSong(){
    console.log("Song is paused");
    isPlaying = false;
    audio.pause();
    playButton.innerHTML = "<img class = 'btn' src = 'Assets/play-button.png'>";
}

function nextSong(){
    if(shuffleMode){
        pauseSong();
        previousSong = current_song;
        current_song = Math.round(Math.random() * 100) % srcList.length;
        current_song == previousSong ? Math.round(Math.random() * 100) % srcList.length: audio = new Audio(srcList[current_song].src);
        audio.onended = nextSong;
        playSong();
    }else{
        if(current_song < srcList.length - 1){
            pauseSong();
            current_song +=1;
            audio = new Audio(srcList[current_song].src);
            audio.onended = nextSong;
            playSong();
        }else{
            pauseSong();
            current_song = 0;
            audio = new Audio(srcList[current_song].src);
            audio.onended = nextSong;
            playSong();
        }
    }
}

shuffleBtn.addEventListener("click",()=> {
    shuffleMode = ! shuffleMode;
    shuffleMode ? shuffleBtn.textContent = "Shuffle On": shuffleBtn.textContent = "Shuffle off";
});

playButton.addEventListener("click",()=> {
    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
}) 

backButton.addEventListener("click", ()=>{
    if(audio.currentTime > 3){
        audio.currentTime = 0;
    }else{
        if(shuffleMode){
            pauseSong();
            current_song = previousSong;
            audio = new Audio(srcList[current_song].src);
            audio.onended = nextSong;
            playSong();
        }else{
            if(current_song > 0){
                pauseSong();
                current_song -=1;
                audio = new Audio(srcList[current_song].src);
                audio.onended = nextSong;
                playSong();
            }
        }
    }
})

skipButton.addEventListener("click", ()=>{
    nextSong();
})

// SERVICE WORKER
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js")
    .then(() => console.log("Service Worker registered"))
    .catch(err => console.log("SW registration failed", err));
}
