/// elements  variables
const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const millisecondsLabel = document.getElementById('millieseconds');

const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const PauseButton = document.getElementById('PauseBtn');
const ResetButton = document.getElementById('ResetBtn');

const Laplist = document.getElementById('laplist');

/// stopwatch variables
let minutes = 0;
let seconds = 0;
let millieseconds = 0;
let interval;
/// adding listener to the button
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
PauseButton.addEventListener('click', pauseTimer);
ResetButton.addEventListener('click', resetTimer);
/// function

function startTimer(){
    interval = setInterval(updateTimer,10);
    startButton.disabled =  true;

}

function stopTimer(){

}

function pauseTimer(){
    clearInterval(interval);
    PauseButton.disabled = true;


}

function resetTimer(){

}
function updateTimer(){
    millieseconds++;
    if(millieseconds === 1000){
        millieseconds = 0;
        seconds++;
    }
    if(seconds === 60){
        seconds = 0;
        minutes++;
    }
displayTimer();

}

function displayTimer(){
    millisecondsLabel.textContent = padTime(millieseconds);
    secondsLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);
}

function padTime(time){
    return time.toString().padStart(2,'0');
}