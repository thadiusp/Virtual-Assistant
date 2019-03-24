//The speech recognition program
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition();
recognition.interimResults = true;
//My global variables
let runOnce = true;
let p = document.createElement('p');
const text = document.querySelector('#text');
text.appendChild(p);
p.classList.add('show');
const turnOn = document.querySelector('#data');

//Function to show what I'm saying to the computer
function showText(e) {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
  
  p.textContent = transcript;
  if (e.results[0].isFinal) {
    setTimeout(() => {
      text.querySelector('.show').remove();
    }, 1000);
    p = document.createElement('p');
    text.appendChild(p);
    p.classList.add('show');
  }

  matchPhrase(transcript);
};

//function to allow me to give phrases that will allow VA to return me information
function matchPhrase(phrase) {
  //get weather phrase
  if (phrase.includes('get the weather')) {
    while (runOnce) {
      runOnce = false;
      getWeather();
      console.log(`Ok,I am getting the weather`);
      turnOn.classList.add('turnOn');
      timeout();
    }
  } else if (phrase.includes('get to work')) { //get the travel time to work phrase
    while (runOnce) {
      //destination(phrase);
      runOnce = false;
      getTravelTime();
      console.log(`One second please,I am getting your travel time.`);
      turnOn.classList.add('turnOn');
      timeout();
    }
  }
};

function timeout() {
  setTimeout(
    function() {
      if (!runOnce) {
      turnOn.classList.remove('turnOn');
      turnOn.querySelector('p').remove();
      if ('img') {
        turnOn.querySelector('img').remove();
      }
      runOnce = true;
    }}, 4000)
}

recognition.addEventListener('result', showText);
recognition.start();
recognition.addEventListener('end', recognition.start);