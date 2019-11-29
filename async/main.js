function setAlarm(time, callback) {
    return (fn) => {

      if (fn === time) {

        return callback();
        
      }
    }
  }
  
  // const goodMorning = () => alert('Доброе утро!'),
  // 	checkTime = setAlarm('07:00', goodMorning);
  
  
  // checkTime('07:30');
  
  // checkTime('07:00'); // Доброе утро
  
  function setDailyRhythm(wakeUpTime, bedTime) {
  
  const goodMorning = () => alert('Доброе утро!'),
      checkTime = setAlarm(wakeUpTime, goodMorning); 
  
  const goodEvening = () => alert('Доброй ночи!'),
      systemTime = setAlarm(bedTime, goodEvening);
  
  setInterval(goodMorning, 1000);
  
  setInterval(goodEvening, 1000);
  
  }
  
  setDailyRhythm('7:30', '18:30');
  