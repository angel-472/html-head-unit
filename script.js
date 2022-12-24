const txtSpeed = document.getElementById("speed")
let userLocation = '';


setInterval(function(){
  navigator.geolocation.getCurrentPosition(updateSpeed);
}, 1000);

function updateSpeed(pos){
  userLocation = pos;
  console.log(pos);
  let movementSpeed = pos.coords.speed;
  txtSpeed.innerText = movementSpeed + " MPH"
}
