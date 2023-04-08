console.log("Welcome to spotify");

let Index = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'))


let songs = [
    {songsName: "Bekhayali", filePath: "songs/1.mp3", coverPath: "covers/cover1.jpg"},
    {songsName: "Tujhein Kitna Chahein Aur Hum", filePath: "songs/2.mp3", coverPath: "covers/cover1.jpg"},
    {songsName: "Phir Mohabbat", filePath: "songs/3.mp3", coverPath: "covers/cover1.jpg"},
    {songsName: "kgf Theme", filePath: "songs/4.mp3", coverPath: "covers/cover1.jpg"},
   
] 

songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByTagName("span")[0].innerText = songs[i].songsName;
}) 




 // audioElement.play();

 masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
         
    }
 })

 audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;


 })

 myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
 })

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
       



    })

    
 })