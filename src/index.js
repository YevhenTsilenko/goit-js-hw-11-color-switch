const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.body;
// console.log(startBtn);
startBtn.addEventListener('click' , onStartClick);
stopBtn.addEventListener('click', onStopClick);

let timerId;
const randomIntegerFromInterval = (min, max) => {
    min = 0;
    max = colors.length - 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
};


function colorChange () {
    body.style.backgroundColor = colors[randomIntegerFromInterval()];
}

function onStartClick() {
    startBtn.disabled = true;
    stopBtn.disabled = false;

    timerId = setInterval(colorChange, 1000);
}

function onStopClick () {
    startBtn.disabled = false;
    stopBtn.disabled = true;

    clearInterval(timerId);
}




