var Board = function() {
  this.grid = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]]
}

Board.prototype.placeActivePiece = function(activePiece) {
  for (var i = 0; i < activePiece.footprint.length; i++) {
    this.grid[activePiece.footprint[i][0]][activePiece.footprint[i][1]] = "X";
  }
};

Board.prototype.clearActivePiece = function() {
  for (var r = 0; r < this.grid.length; r++) {
    for (var c = 0; c < 10; c++) {
      if (this.grid[r][c] === "X") {
        this.grid[r][c] = 0
      }
    }
  }
};

Board.prototype.settle = function(activePiece) {
  for (var r = 0; r < this.grid.length; r++) {
    for (var c = 0; c < 10; c++) {
      if (this.grid[r][c] === "X") {
        this.grid[r][c] = "C"
      }
    }
  }
};

Board.prototype.canMoveDown = function(activePiece) {
  for (i = 0; i < activePiece.footprint.length; i++) {
    debugger;
    if ((this.grid[activePiece.footprint[i][0] + 1][activePiece.footprint[i][1]] === undefined) ||
        (this.grid[activePiece[i][0] + 1][activePiece[i][1]] ==="C")) {
      return false;
    };
  };
  return true;
}

Board.prototype.canMoveLeft = function(activePiece) {
  for (i = 0; i < activePiece.footprint.length; i++) {
    if ((this.grid[activePiece.footprint[i][0]][activePiece.footprint[i][1] - 1] === undefined) ||
        (this.grid[activePiece[i][0]][activePiece[i][1] - 1] ==="C")) {
      return false;
    };
  };
  return true;
}

Board.prototype.canMoveRight = function(activePiece) {
  for (i = 0; i < activePiece.footprint.length; i++) {
    if ((this.grid[activePiece[i][0]][activePiece[i][1] + 1] === undefined) ||
        (this.grid[activePiece[i][0]][activePiece[i][1] + 1] ==="C")) {
      return false;
    };
  };
  return true;
}
