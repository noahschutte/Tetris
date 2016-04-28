$(document).ready(function() {

var Timer = function() {
  this.time = 0
}

Timer.prototype.timeInterval = function() {
  setInterval(alertFunc, 3000);
}

function addZero(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}

function startGame() {
  var d = new Date();
  var x = document.getElementById("timer");
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  x.innerHTML = h + ":" + m + ":" + s;
}

});
