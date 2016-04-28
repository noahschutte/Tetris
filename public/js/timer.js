$(document).ready(function() {

var Timer = function() {
  this.time = 0
}

Timer.prototype.timeInterval = function() {
  setInterval(alertFunc, 3000);
}

var updateTimer = function(seconds) {
  $("#timer").text(seconds);
}

});
