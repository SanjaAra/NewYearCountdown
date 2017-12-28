let mainCountdowd = document.querySelector('#main-countdowd'),
  mainMessages = document.querySelector('#main-messages'),
  greetingHolder = document.querySelector('#greetingHolder'),
  snow = document.querySelectorAll('.snow')[0],
  body = document.querySelector('body'),
  times = document.querySelectorAll('.time'),
  nyMilisec = Date.parse("2018-01-01T00:00:00"),
  // 2018-01-01T00:00:00
  // 2017-12-28T00:34:00
  today = new Date().getTime(),
  toNYtime = nyMilisec - today;

if (toNYtime < 0) {
  mainCountdowd.style.display = "none";
  mainMessages.style.display = "block";
  messageRotation;
} else {
  countdown(toNYtime);
}

let time = setInterval(function() {
  today = new Date().getTime();
  toNYtime = nyMilisec - today;

  if (toNYtime > 0) {
    countdown(toNYtime);
  } else {
    clearInterval(time);
    messageRotation();
  }

}, 1000)

function countdown(ms) {
  mainCountdowd.style.display = "block";
  mainMessages.style.display = "none";

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
}());


function messageRotation() {
  mainCountdowd.style.display = "none";
  mainMessages.style.display = "block";

  let greetingMsg = ["Све што је добро, што се срећом зове, нека вас прати од године нове. Све што је лоше и немир ствара, нека однесе година стара.", "Када се склопе казаљке сата и Нова година покуца на врата, нека вам се испуне све жеље, нека тугу отера весеље.", "Нова је година шанса нова, да кренеш путем својих снова, да нижеш успехе, оствариш жеље, да имаш праве пријатеље.", "Нека све што тугу ствара, однесе ова година стара, а година нова нека донесе, пуно среће и здравља, а тугу однесе."];

  message()

  function message() {
    let msgIn = Math.floor(Math.random() * greetingMsg.length);
    let oneMsg = greetingMsg[msgIn].split('');
    let i = 0
    greetingHolder.style.animation = "tekst 3s ease-in";
    let loop = setInterval(function() {
      greetingHolder.innerHTML += oneMsg[i];
      i++;
      if (i == oneMsg.length) {
        clearInterval(loop);
        greetingHolder.style.animation = "";
        setTimeout(function() {
          greetingHolder.innerHTML = '';

        }, 700)

        setTimeout(message, 1000)
      }
    }, 200);
  }
};