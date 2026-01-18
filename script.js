const playButton = document.getElementById("playMusic");
const skipButton = document.getElementById("skipMusic");
const backButton = document.getElementById("backButton");

const songTitle = document.getElementById("songTitle");
const artistTitle = document.getElementById("artist");
const icon = document.getElementById("icon");

const srcList = [
    {
        title:"Animal I have Become",
        artist:"Three days grace",
        src:"Music/Animal_I_have_become.mp3"
    },
    {
        title:"Monster",
        artist:"Skillet",
        src:"Music/Monster.mp3"
    },
    {
        title:"LET THE WORLD BURN",
        artist:"Chris Grey",
        src:"Music/Let_The_world_Burn.mp3"
    },
    {
        title:"Faint",
        artist:"Linkin Park",
        src:"Music/Faint.mp3"
    },
    {
        title:"Rollin'",
        artist:"Limp Bizkit",
        src:"Music/Rollin.mp3"
    },
    {
        title:"Crawling",
        artist:"Linkin Park",
        src:"Music/Crawling.mp3"
    },
    {
        title:"Fighting Myself",
        artist:"Linkin Park",
        src:"Music/Fighting_Myself.mp3"
    },
    {
        title:"I hate everything about you",
        artist:"3 days grace",
        src:"Music/I_Hate_Everything_About_You.mp3"
    },
    {
        title:"Malo Tebya",
        artist:"",
        src:"Music/Malo_Tebya.mp3"
    },
    {
        title:"In The End",
        artist:"Linkin Park",
        src:"Music/In_The_End.mp3"
    }

];

let current_song = 0;
let audio;
let isPlaying = false;

audio = new Audio(srcList[current_song].src);
audio.onended = nextSong;
console.log(srcList.length);

function playSong(){
    console.log("Song is playing");
    isPlaying = true;
    audio.play();
    playButton.innerHTML = "<img class = 'btn' src = 'Assets/pause.png'>";
    songTitle.innerHTML = srcList[current_song].title;
    artistTitle.textContent = srcList[current_song].artist.toUpperCase();
    document.title = srcList[current_song].title;
}

function pauseSong(){
    console.log("Song is paused");
    isPlaying = false;
    audio.pause();
    playButton.innerHTML = "<img class = 'btn' src = 'Assets/play-button.png'>";
}

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
        if(current_song > 0){
            pauseSong();
            current_song -=1;
            audio = new Audio(srcList[current_song].src);
            audio.onended = nextSong;
            playSong();
        }
    }
})

skipButton.addEventListener("click", ()=>{
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
})

// SERVICE WORKER
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js")
    .then(() => console.log("Service Worker registered"))
    .catch(err => console.log("SW registration failed", err));
}
