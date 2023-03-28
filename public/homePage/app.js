let daysEl = document.querySelector('.days');
let hoursEl = document.querySelector('.hours');
let minEl = document.querySelector('.min');
let secEl = document.querySelector('.sec');

const countdown = () => {
    let promisedDate = new Date('04 nov 2023');
    let dateNow = Date.now();
    let diff = promisedDate - dateNow;
    
    let sec = 1000;
    let min = sec * 60;
    let hour = min * 60;
    let day = hour * 24;

    let days = Math.floor(diff / day);
    let hours = Math.floor((diff % day) / hour);
    let mins = Math.floor((diff % hour) / min);
    let secs = Math.floor((diff % min) / sec);

    days < 10 ? daysEl.innerText = `0${days}` : daysEl.innerText = days;
    hours < 10 ? hoursEl.innerText = `0${hours}` : hoursEl.innerText = hours;
    mins < 10 ? minEl.innerText = `0${mins}` : minEl.innerText = mins;
    secs < 10 ? secEl.innerText = `0${secs}` : secEl.innerText = secs;

    setTimeout(() => {
        countdown();
    }, 1000);
}

countdown();