const txtLocation = document.getElementById("coords")
const txtClock = document.getElementById("clock")
const txtSpeed = document.getElementById("speed")
let userLocation = '';


navigator.geolocation.watchPosition(function(position) {
  updateSpeed(position)
});

function updateSpeed(pos){
  userLocation = pos;
  console.log(pos);
  let movementSpeed = pos.coords.speed;
  txtSpeed.innerText = movementSpeed + " MPH"

  txtLocation.innerText = `${pos.coords.latitude} ${pos.coords.longitude}`;
  updateClock();
}


function updateClock(){
  let currentdate = new Date()
  let date = (currentdate.getHours() < 10)?"0":"" + ((currentdate.getHours()>12)?(currentdate.getHours()-12):currentdate.getHours()) +":"+ ((currentdate.getMinutes() < 10)?"0":"") + currentdate.getMinutes() +":"+ ((currentdate.getSeconds() < 10)?"0":"") + currentdate.getSeconds() + ((currentdate.getHours()>12)?(' PM'):' AM')
  txtClock.innerText = date
}
