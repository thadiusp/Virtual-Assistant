const apiKey = '&key=Add API key here';
const urlTravel = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&';
const origin = 'origins=';
const dest = '&destinations=';
let tPara = document.createElement('p');
const travel = document.querySelector('#data');
let home = 'Add+home+address+here';
let work = 'Add+work+address+here';
let loc;

//get travel times TODO: I need to figure out how to make the origin and dest dynamic
/*function destination(word) {
  console.log(word); //word is undefined. How do I make it defined?
  if (word.includes('work')) {
    const work = 'Enter+Work+Address+here';
    return work;
  } else if (word.includes('home')) {
    const home = 'Enter+Home+Address+here';
    return home;
  }
}
//destination('work');
loc = destination();

console.log(loc);*/

function getTravelTime() {
  fetch(urlTravel + origin + home + dest + work + apiKey)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const dist = data.rows[0].elements[0].distance.text;
      const travelTime = data.rows[0].elements[0].duration.text;
      travel.appendChild(tPara);
      tPara.innerHTML = `Travel Time: ${travelTime} <br> Distance to Destination: ${dist}`
      console.log(`Travel time is ${travelTime} and the distance is ${dist}`);
    }).catch('There is an issue: ' + console.error);
};

//function to use geolocation to get origin. TODO: I need to figure out how to 
//implement that in my fetch call.

/*
function getLoc() {
  return new Promise(resolve => navigator.geolocation.getCurrentPosition(resolve))
    .then(pos => {
      const lat = pos.coords.latitude;
      const long = pos.coords.longitude;
      return `${lat},${long}`
    }).catch((err) => console.log(err));
};

showPos = (lat, long) => {
  return `${lat},${long}`;
};

navigator.geolocation.getCurrentPosition((position) => {
  showPos(position.coords.latitude, position.coords.longitude)
});

showPos;
//console.log(loc);
*/
