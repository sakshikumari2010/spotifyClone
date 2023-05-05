console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('mus.mp3');
let masterPlay =  document.getElementById('masterPlay');
let myProgressBar =  document.getElementById('myProgressBar');
let gif =  document.getElementById('gif');

let songs =[
    {songName: "Barrish", filePath: "mus.mp3", coverPath : "q1.jpg"},
    {songName: "Barrish", filePath: "1.mp3", coverPath : "q1.jpg"},
    {songName: "Barrish", filePath: "2.mp3", coverPath : "q1.jpg"},
    {songName: "Barrish", filePath: "3.mp3", coverPath : "q1.jpg"},
    {songName: "Barrish", filePath: "4.mp3", coverPath : "q1.jpg"},
    {songName: "Barrish", filePath: "5.mp3", coverPath : "q1.jpg"},
    {songName: "Barrish", filePath: "6.mp3", coverPath : "q1.jpg"},
    {songName: "Barrish", filePath: "7.mp3", coverPath : "q1.jpg"},
    {songName: "Barrish", filePath: "8.mp3", coverPath : "q1.jpg"},

]

// audioElement.play()

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;

    }
})


//Listen to Events
audioElement.addEventListener('timeupdate', () =>{
    // console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;


})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})