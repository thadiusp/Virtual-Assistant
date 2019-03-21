const api = 'f76d4358d0078025c2a282a82459560e'
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Indianapolis&appid=';
let para = document.createElement('p');
let img = document.createElement('img');
const weather = document.querySelector('#data');

//function that allows me to get the current weather conditions
function getWeather() {
  fetch(url + api)
    .then(response => response.json())
    .then(data => {
      const city = data.name;
      const kTemp = data.main.temp;
      const fTemp = Math.round((kTemp - 273.15) * 1.8 + 32);
      const wx = data.weather[0].main;
      const wxIcon = 'Weather Icons/' + data.weather[0].icon + '.png';
      weather.appendChild(para);
      weather.appendChild(img);
      para.innerHTML = `City: ${city} <br> Temp: ${fTemp}F <br> Weather: ${wx}`;
      img.src = `${wxIcon}`;
    })
    .catch(console.error);
}
