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
  this.activePiece = null
}

var game = new Game();

function startGame() {
  game.startGameCycle();
}

Game.prototype.newPiece = function() {
  this.activePiece = new Piece("Z", "red")
};

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
  if (!this.activePiece) {
    this.newPiece();
  }
  this.board.update(this.activePiece);
  this.boardView.renderBoard(this.board);
};

Game.prototype.startGameCycle = function() {
  setInterval(this.coreGameLoop.bind(this), 1000 / this.frameRate);
};


});

