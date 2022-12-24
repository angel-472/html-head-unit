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
}
