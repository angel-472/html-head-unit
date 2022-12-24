const txtSpeed = document.getElementById("speed")

setInterval(function(){
  let movementSpeed = GeolocationCoordinates.speed;
  txtSpeed.innerText = movementSpeed + " MPH"
}, 1000);
