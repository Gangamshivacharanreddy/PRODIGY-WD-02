let startTime = 0;
let currentTime = 0;
let lapTimes = [];
let isRunning = false;

const timeDisplay = document.getElementById('time-display');
const lapTimesDisplay = document.getElementById('lap-times-display');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');
const lapButton = document.getElementById('lap-button');

startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapButton.addEventListener('click', lapTime);

function startStopwatch() {
    if (!isRunning) {
        startTime = new Date().getTime();
        isRunning = true;
        intervalId = setInterval(updateTime, 1000);
    }
}

function pauseStopwatch() {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
    }
}

function resetStopwatch() {
    startTime = 0;
    currentTime = 0;
    lapTimes = [];
    timeDisplay.textContent = '00:00:00';
    lapTimesDisplay.textContent = '';
    isRunning = false;
}

function lapTime() {
    const lapTime = currentTime;
    lapTimes.push(lapTime);
    lapTimesDisplay.textContent += `Lap ${lapTimes.length}: ${formatTime(lapTime)}\n`;
}

function updateTime() {
    currentTime = new Date().getTime() - startTime;
    timeDisplay.textContent = formatTime(currentTime);
}

function formatTime(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}