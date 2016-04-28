function Piece(shape, color) {
  this.shape = shape;
  switch(shape) {
    case "L":
      this.shapeCoords = [[0,0], [0,1], [0,2], [1,0]]
      break;
    case "J":
      this.shapeCoords = [[0,0], [0,1], [0,2], [-1,0]]
      break;
    case "T":
      this.shapeCoords = [[0,0], [0,1], [-1,0], [1,0]]
      break;
    case "LINE":
      this.shapeCoords = [[0,0], [0,1], [0,2], [0,-1]]
      break;
    case "Z":
      this.shapeCoords = [[0,0], [0,1], [1,-1], [1,0]]
      break;
    case "S":
      this.shapeCoords = [[0,0], [0,1], [1,1], [-1,0]]
      break;
    case "BOX":
      this.shapeCoords = [[0,0], [0,1], [1,0], [1,1]]
      break;
  };
  this.color = color;
  this.isActive = true;
  this.indexCoord = [5, 2];
  this.buildSquares();
}

Piece.prototype.buildSquares = function() {
  var color = this.color
  this.squares = this.shapeCoords.map(function(coord) {
    return new Square(coord, color)
  });
};

Piece.prototype.moveLeft = function() {
  this.indexCoord[0]--;
};

Piece.prototype.moveRight = function() {
  this.indexCoord[0]++;
};

Piece.prototype.moveDown = function() {
  this.indexCoord[1]++;
}

Piece.prototype.rotate = function() {
  this.squares.forEach(function(square) {
    square.rotate();
  });
};

