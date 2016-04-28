function Square(innerCoord, color) {
  this.innerCoord = innerCoord;
  this.color = color;
}

var rotateArrays = [[[0,1], [-1,0], [0,-1], [1,0]],
                    [[0,2], [-2,0], [0,-2], [2,0]],
                    [[1,1], [-1,1], [-1,-1], [1,-1]],
                    [[0,0]]];

Square.prototype.NextCoord = function(currentCoord) {
  for (i=0; i<rotateArrays.length; i++) {
    for (j=0; j<rotateArrays[i].length; j++) {
      if (sameArray(rotateArrays[i][j], currentCoord)) {
        return rotateArrays[i][(j+1)] || rotateArrays[i][0]
      }
    };
  };
};

Square.prototype.rotate = function() {
  this.innerCoord = this.NextCoord(this.innerCoord)
};

//The below only works for non-nested arrays (i.e. arrays without other arrays or object in them)
function sameArray(array1, array2) {
  if(array1.length !== array2.length){
    return false;
  };
  for(var i = array1.length; i--;) {
    if(array1[i] !== array2[i]) {
      return false;
    };
  };
  return true;
}

