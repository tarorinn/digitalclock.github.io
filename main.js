'use strict';
{
  function clock() {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const now = new Date();
    const year = String(now.getFullYear());
    var month = String(now.getMonth() + 1);
    var date = String(now.getDate());
    var day = String(week[now.getDay()]);
    var hour = String(now.getHours());
    var min = String(now.getMinutes());
    var sec = String(now.getSeconds());

    if (month < 10) {
      month = "0" + month;
    }
    if (date < 10) {
      date = "0" + date;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }

    document.getElementById('date').innerHTML = year + "-" + month + "-" + date + " " + day;
    document.getElementById('time').innerHTML = hour + ":" + min + ":" + sec;
  }
  
  setInterval(clock, 1000);
}
