const playButton = document.getElementById("playMusic");
const skipButton = document.getElementById("skipMusic");
const backButton = document.getElementById("backButton");

const songTitle = document.getElementById("songTitle");
const artistTitle = document.getElementById("artist");
const icon = document.getElementById("icon");

//Create the list of mp3 files
const musicList = [];
const srcList = [
    {
        title:"Animal I have Become",
        artist:"3 days grace",
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
        title:"Time of dying",
        artist:"3 days grace",
        src:"Music/Time_Of_Dying.mp3"
    },
    {
        title:"Infra-red",
        artist:"3 days grace",
        src:"Music/Infrared.mp3"
    },
    {
        title:"I Am Machine",
        artist:"3 days grace",
        src:"Music/I_Am _Machine.mp3"
    },
    {
        title:"In The End",
        artist:"Linkin Park",
        src:"Music/In_The_End.mp3"
    }

];

for(let x = 0; x < srcList.length; x ++){
    let audio = new Audio(srcList[x].src);
    musicList.push(audio);
}

let isPlaying = false;
let currentSong = 0;
let num;

setInterval(() => {
    num = (Math.ceil(Math.random() * 100) % 5 )+ 1
    console.log(num);
    icon.src = `Assets/Icons/Icon${num}.png`;
}, 10000);

function playSong(){
    musicList[currentSong].play();
    playButton.innerHTML = "<img class = 'btn' src = 'Assets/pause.png'>";
    songTitle.innerHTML = srcList[currentSong].title;
    artistTitle.textContent = srcList[currentSong].artist.toUpperCase();
    document.title = srcList[currentSong].title;
}

function pauseSong(){
    musicList[currentSong].pause();
    playButton.innerHTML = "<img class = 'btn' src = 'Assets/play-button.png'>";
}

playButton.onclick = function(){
    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
    isPlaying = !isPlaying;
}

skipButton.onclick = function(){
    if(currentSong < musicList.length - 1){
        musicList[currentSong].currentTime = 0;
        pauseSong();
        currentSong +=1;
        isPlaying = true;
        playSong();
    }else{
        musicList[currentSong].currentTime = 0;
        pauseSong();
        currentSong =0;
        isPlaying = true;
        playSong();
    }
}

backButton.onclick = function(){
    console.log(currentSong);
    if(Math.ceil(musicList[currentSong].currentTime) < 3){
        if (currentSong > 0){
            pauseSong();
            currentSong -=1;
            isPlaying = true;
            playSong();
        }
    }else{
        musicList[currentSong].currentTime = 0;
    }
}
