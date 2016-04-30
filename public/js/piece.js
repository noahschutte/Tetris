function Piece(shape) {
  this.shape = shape;
  switch(shape) {
    case "L":
      this.shapeCoords = [[0,0], [1,0], [2,0], [0,1]]
      break;
    case "J":
      this.shapeCoords = [[0,0], [1,0], [2,0], [0,-1]]
      break;
    case "T":
      this.shapeCoords = [[0,0], [1,0], [0,-1], [0,1]]
      break;
    case "LINE":
      this.shapeCoords = [[0,0], [1,0], [2,0], [-1,0]]
      break;
    case "Z":
      this.shapeCoords = [[0,0], [1,0], [1,-1], [0,1]]
      break;
    case "S":
      this.shapeCoords = [[0,0], [1,0], [1,1], [0,-1]]
      break;
    case "BOX":
      this.shapeCoords = [[0,0], [1,0], [0,1], [1,1]]
      break;
  };
  switch(shape) {
    case "L":
      this.color = "blue";
      break;
    case "J":
      this.color = "red";
      break;
    case "T":
      this.color = "green";
      break;
    case "LINE":
      this.color = "orange";
      break;
    case "Z":
      this.color = "yellow";
      break;
    case "S":
      this.color = "purple";
      break;
    case "BOX":
      this.color = "brown";
      break;
  };
  this.isActive = true;
  this.indexCoord = [2, 5];
  this.indexPreviewCoord = [2,2];
  this.buildSquares();
  this.footprint = this.setFootprint();
  this.previewFootprint = this.setPreviewFootprint();
}

Piece.prototype.buildSquares = function() {
  var color = this.color
  this.squares = this.shapeCoords.map(function(coord) {
    return new Square(coord, color)
  });
};

Piece.prototype.setFootprint = function() {
  return [this.indexCoord, this.squares[1].boardCoord(this.indexCoord), this.squares[2].boardCoord(this.indexCoord), this.squares[3].boardCoord(this.indexCoord)];
};

Piece.prototype.setPreviewFootprint = function() {
  return [this.indexPreviewCoord, this.squares[1].boardCoord(this.indexPreviewCoord), this.squares[2].boardCoord(this.indexPreviewCoord), this.squares[3].boardCoord(this.indexPreviewCoord)];
};

Piece.prototype.moveLeft = function() {
  this.indexCoord[1]--;
  this.footprint = this.setFootprint();
};

Piece.prototype.moveRight = function() {
  this.indexCoord[1]++;
  this.footprint = this.setFootprint();
};

Piece.prototype.moveDown = function() {
  this.indexCoord[0]++;
  this.footprint = this.setFootprint();
}

Piece.prototype.rotate = function() {
  this.squares.forEach(function(square) {
    square.rotate();
  });
  this.footprint = this.setFootprint();
};

Piece.prototype.potentialFootprint = function () {
  return [this.indexCoord, this.squares[1].nextBoardCoord(this.indexCoord), this.squares[2].nextBoardCoord(this.indexCoord), this.squares[3].nextBoardCoord(this.indexCoord)];
}


