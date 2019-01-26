// ==================== CONSTANTS ====================
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const inpHours = document.querySelector('#inp-hours');
const inpMinutes = document.querySelector('#inp-minutes');
const inpSeconds = document.querySelector('#inp-seconds');
const start = document.querySelector('#start');
const chronometer = document.querySelector('#chronometer');
const loop = document.querySelector('#loop');



// ==================== FUNCTIONS ====================
function startChronometer(loop) {
    let timeHours;
    let timeMinutes;
    let timeSeconds = parseInt(inpSeconds.value);
    if(isNaN(timeSeconds)) {
        timeSeconds = 60;
    }
    let stop = false;
    let timer = setInterval(() => {
        timeMinutes = parseInt(minutes.innerText);
        timeHours = parseInt(hours.innerText);
        if(timeSeconds == 0){
            if(timeMinutes > 0 || timeHours > 0){
                timeSeconds = 60;
                substractMinutes(timeMinutes);
            } else{
                clearInterval(timer);
                stop = true;
                const audio = new Audio('assets/alarm-clock.mp3');
                audio.play();
                if(loop){
                    audio.loop = true;
                }
            }
        }
        timeSeconds--;
        if(!stop){
            if(timeSeconds < 10){
                seconds.innerText = addZero(timeSeconds);
            } else {
                seconds.innerText = timeSeconds;
            }
        }
    }, 1000);
} 

function substractMinutes(timeMinutes) {
    timeHours = parseInt(hours.innerText);
    if(timeMinutes == 0 && timeHours > 0){
        timeMinutes = 60;
        substractHours(timeHours);
    } else {

    }
    timeMinutes--;
    if(timeMinutes < 10){
        minutes.innerText = addZero(timeMinutes);
    } else {
        minutes.innerText = timeMinutes;
    }
}

function substractHours(timeHours) {
    timeHours--;
    if(timeHours < 10){
        hours.innerText = addZero(timeHours);
    } else {
        hours.innerText = timeHours;
    }
}

function setHours () {
    const time = inpHours.value;
    if(parseInt(time) < 10){
        hours.innerText = addZero(time)
    } else {
        hours.innerText = time
    }
}

function setMinutes () {
    const time = inpMinutes.value;
    if(parseInt(time) < 10){
        minutes.innerText = addZero(time)
    } else {
        minutes.innerText = time
    }
}

function setSeconds () {
    const time = inpSeconds.value;
    if(parseInt(time) < 10){
        seconds.innerText = addZero(time);
    } else {
        seconds.innerText = time;
    }
}

function addZero(time) {
    return `0${time}`;
}

function addTime() {
    let start = false;
    if(inpHours.value){
        start = true;
        setHours();
    } 
    if(inpMinutes.value){
        start = true;
        setMinutes();
    }
    if(inpSeconds.value){
        start = true;
        setSeconds();
    }
    if(start){
        startChronometer(loop.checked);
    }
}

// ==================== LISTENERS ====================

start.addEventListener('click', addTime);

// ==================== MATERIALIZE SETTINGS ====================

document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.modal');
    const instances = M.Modal.init(elems);
});