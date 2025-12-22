const songs = [
    { title: "Dreams", cover: "https://picsum.photos/400?1", duration: 12 },
    { title: "Ocean",  cover: "https://picsum.photos/400?2", duration: 15 },
    { title: "Rain",   cover: "https://picsum.photos/400?3", duration: 18 }
];

let currentIndex = 0;
let playing = false;
let currentTime = 0;
let interval = null; 

function addOneSecond () {
    currentTime++
    updateUI()
}

function togglePlay() {
    if (!playing) {
        playing = true
        addOneSecond()
        interval = setInterval (function(){
            addOneSecond()
        },1000)
    }
    else if (playing) {
        playing = false
        clearInterval(interval)
    }
}

function nextSong() {
    currentTime=0
    if(currentIndex==(songs.length-1)) {
    currentIndex = 0
    updateUI()
    }
    
    else{
    currentIndex++
    updateUI() 
    }
}

function prevSong() {
    currentTime=0
    if(currentIndex==0) {
    currentIndex = (songs.length - 1)
    updateUI()
    }
    
    else {
    currentIndex--
    updateUI() 
    }
}

function tick() {
}

function updateUI() {
    const song = songs[currentIndex];

    // Cambiar portada y título
    document.getElementById("cover").src = song.cover;
    document.getElementById("song-title").textContent = song.title;

    // Barra de progreso
    const percentage = (currentTime / song.duration) * 100;
    document.getElementById("progress").style.width = percentage + "%";
}

// Render inicial
updateUI();
