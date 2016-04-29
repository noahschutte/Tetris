$(document).ready(function() {

  $('#start-game-button').on('click', function(event) {
    startGame();
  })

function Game() {
  this.board = new Board();
  this.boardView = new BoardView();
  this.frameRate = 25;
  this.coreTimer = 0;
  this.timeRunning = 0;
  this.difficultyLevel = 1;
  this.activePiece = this.newPiece()
}

var shapesArray = ["L", "J", "T", "LINE", "Z", "S", "BOX"]

Game.prototype.newPiece = function() {
  return new Piece(shapesArray[Math.floor(Math.random()*7)], "red")
};

var game = new Game();

function startGame() {
  game.startGameCycle();
}

Game.prototype.updateTime = function() {
  $('#timer').html(this.secondsRunning());
};

Game.prototype.secondsRunning = function() {
  return Math.floor(this.coreTimer / this.frameRate);
};


Game.prototype.coreGameLoop = function() {
  this.coreTimer++;

  if (this.coreTimer % 10 === 0) {
    this.updateTime();
  }

  if (this.coreTimer % 10 === 0) {
    if (this.board.canMoveDown(this.activePiece)) {
      this.activePiece.moveDown();
    } else {
      this.board.settle(this.activePiece);
      this.activePiece = newPiece();
    }
  };
  this.board.clearActivePiece();
  this.board.placeActivePiece(this.activePiece);
  this.boardView.clearBoard(this.board);
  this.boardView.renderBoard(this.board);
};

Game.prototype.startGameCycle = function() {
  setInterval(this.coreGameLoop.bind(this), 1000 / this.frameRate);
};


});

