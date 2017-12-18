let mainContent = document.querySelector('#main-content'),
  snow = document.querySelectorAll('.snow')[0],
  times = document.querySelectorAll('.time'),
  nyMilisec = Date.parse("2018-01-01T00:00:00"),
  today = new Date().getTime(),
  toNYtime = nyMilisec - today;

countdown(toNYtime);

setInterval(function() {
  today = new Date().getTime();
  toNYtime = nyMilisec - today;
  countdown(toNYtime);
}, 1000)

function countdown(ms) {
  let day = Math.floor(ms / (24 * 60 * 60 * 1000)),
    dayMsRest = ms % (24 * 60 * 60 * 1000),
    our = Math.floor(dayMsRest / (60 * 60 * 1000)),
    ourMsRest = dayMsRest % (60 * 60 * 1000),
    min = Math.floor(ourMsRest / (60 * 1000)),
    minMsRest = ourMsRest % (60 * 1000),
    sec = Math.floor(minMsRest / 1000);

  (day < 10) ? day = '0' + day: day;
  (our < 10) ? our = '0' + our: our;
  (min < 10) ? min = '0' + min: min;
  (sec < 10) ? sec = '0' + sec: sec;

  times[0].innerHTML = day;
  times[1].innerHTML = our;
  times[2].innerHTML = min;
  times[3].innerHTML = sec;
}

(function snowflake() {
  let h = window.innerWidth;
  snow.style.height = h + 'px';
  console.log(h);
}());