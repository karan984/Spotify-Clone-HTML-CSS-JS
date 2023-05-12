let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let myProgressBar = document.getElementById('myProgressBar');
let masterPlay = document.getElementById('masterPlay');

let songItems = Array.from(document.querySelectorAll(".songItem"));

let songs = [
    {songName:"Song 1", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Song 2", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Song 3", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Song 4", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Song 5", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Song 6", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Song 7", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Song 8", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"Song 9", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName:"Song 10", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"},
]


songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;
})


// Handle Play / Pause

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        document.querySelector("#gif").style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        document.querySelector("#gif").style.opacity=0;
    }
})




// Listen To Events

audioElement.addEventListener('timeupdate', ()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',  ()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;

})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        gif.style.opacity = 1;
        masterSongName.innerHTML = songs[songIndex-1].songName;
        e.target.classList.add("fa-circle-pause");
        audioElement.src = 'songs/'+songIndex+'.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex===1){
        songIndex=10;
    }else{
        songIndex--;
    }
    masterSongName.innerHTML = songs[songIndex-1].songName;
    audioElement.src = 'songs/'+songIndex+'.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex===10){
        songIndex=1;
    }else{
        songIndex++;
    }

    masterSongName.innerHTML = songs[songIndex-1].songName;
    audioElement.src = 'songs/'+songIndex+'.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})