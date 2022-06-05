import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
const timeInput = document.querySelector("#datetime-picker");
const startBnt = document.querySelector('button[data-start=""]');
const days = document.querySelector('span[data-days=""]');
const minutes = document.querySelector('span[data-minutes=""]');
const hours = document.querySelector('span[data-hours=""]');
const seconds = document.querySelector('span[data-seconds=""]');
const totayDate = new Date();
let date0 = totayDate.getTime();
let date1;
let timeToRun;
let startCount;
const options = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,

    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        date1 = selectedDates[0].getTime();
        timeToRun = date1 - date0;
        if (timeToRun < 0) {
            startBnt.disabled = true;
            Notiflix.Notify.failure("Please choose a date in the future");
        } else { startBnt.disabled =false};
        
    },
};

const calendar = flatpickr(timeInput, options);
function countdown() {
  let  daysNumber = timeToRun / (24 * 60 * 60 * 1000);
    if (daysNumber < 10) {
        days.innerHTML = `0${Math.floor(daysNumber)}`;
    }
    else {
        days.innerHTML = Math.floor(daysNumber);
    }
    
    let hoursNumber = timeToRun / (60 * 60 * 1000) - Math.floor(daysNumber)*24;
    if (hoursNumber < 10) {
        hours.innerHTML = `0${Math.floor(hoursNumber)}`;
    }
    else {
        hours.innerHTML = Math.floor(hoursNumber);
    }
    let minutesNumber = (timeToRun / (60 * 1000)) - Math.floor(hoursNumber) * 60-Math.floor(daysNumber)*24*60;
    if (minutesNumber < 10) {
        minutes.innerHTML = `0${Math.floor(minutesNumber)}`;
    }
    else {
        minutes.innerHTML = Math.floor(minutesNumber);
    }
    
    let secondsNumber = (timeToRun / 1000) - Math.floor(minutesNumber) * 60 - Math.floor(hoursNumber) * 60 * 60 - Math.floor(daysNumber) * 24 * 60*60;
    if (secondsNumber < 10) {
        seconds.innerHTML = `0${Math.floor(secondsNumber)}`;
    }
    else {
        seconds.innerHTML = Math.floor(secondsNumber);
    }
   
    
    timeToRun = timeToRun - 1000;
    if (timeToRun < 0) {
        clearInterval(startCount);
        
    }
   
}

startBnt.addEventListener("click", () => {
     startCount = setInterval(countdown, 1000);
    
});





