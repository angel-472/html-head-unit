const txtLocation = document.querySelector(".coords")
const txtClock = document.querySelector(".clock")
const txtSpeed = document.querySelector(".speed")
let userLocation = null;


setInterval(function(){
  let currentdate = new Date()
  let date = (currentdate.getHours() < 10)?"0":"" + ((currentdate.getHours()>12)?(currentdate.getHours()-12):currentdate.getHours()) +":"+ ((currentdate.getMinutes() < 10)?"0":"") + currentdate.getMinutes() + ((currentdate.getHours()>12)?(' PM'):' AM')
  txtClock.innerText = date
}, 1000);

/*navigator.geolocation.watchPosition(function(position) {
  updateSpeed(position)
});*/

function updateSpeed(pos){
  userLocation = pos;
  console.log(pos);
  let movementSpeed = pos.coords.speed;
  txtSpeed.innerText = (movementSpeed ? movementSpeed : 0)
}
