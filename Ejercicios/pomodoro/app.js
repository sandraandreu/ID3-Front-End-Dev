// Tiempo inicial 25 minutos
let totalSeconds = 25 * 60;
let timerInterval = null;
let running = false;
let minusOneSecond 

function startingTimer () {
    totalSeconds--
    updateTimerUI()
}

function startTimer() {
    if (!running) {
        startingTimer ()  
        running = true  

        minusOneSecond = setInterval (function(){
            startingTimer ()    
        },1000)
    }
}



function stopTimer() {
    if (running) {
        clearInterval(minusOneSecond)
        running = false
    }
}

function resetTimer() {
    stopTimer()
    totalSeconds = 25 * 60;
    updateTimerUI()
}

function updateTimerUI() {
    const timerEl = document.getElementById("timer");
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    timerEl.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}

// Render inicial
updateTimerUI();
