$(document).ready(function() {

  $(document).on('keyup', function(event) {
    if(event.keyCode == 37) {
      console.log("left")
    }
    if(event.keyCode == 38) {
      console.log("up")
    }
    if(event.keyCode == 39) {
      console.log("right")
    }
    if(event.keyCode == 40) {
      console.log("down")
    }
  });

});
