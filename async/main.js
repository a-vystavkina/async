'use strict';

function setAlarm(time, callback) {
  return (func) => {
    console.log(func);
    if (func === time) {
      return callback();
    }
    else {
    return undefined;
    }
  }
}

const getZero = (param) => {
  return param < 10 ? param = "0" + param : param;
}

function getCurrentTime() {
    const currentSystemTime = new Date();
    const currerntTime = getZero(currentSystemTime.getHours()) + ':' + getZero(currentSystemTime.getMinutes());
    return currerntTime;
}


function setDailyRhythm(wakeUpTime, bedTime) {

  const goodMorning = () => alert('Доброе утро!'),
	  checkTime = setAlarm(wakeUpTime, goodMorning); 

  const goodEvening = () => alert('Доброй ночи!'),
	  systemTime = setAlarm(bedTime, goodEvening);

  let morningTime = setInterval(function tick() {
    checkTime(getCurrentTime ());
    }, 1000);

  let eveningTime = setTimeout(function tack() {
    systemTime(getCurrentTime ());
  }, 1000);
 
}

setDailyRhythm('16:25', '16:26');
  
