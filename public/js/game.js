$(document).ready(function() {

  $('#start-game-button').on('click', function(event) {
    startGame();
  })

function Game() {
  this.frameRate = 25;
  this.coreTimer = 0;
  this.timeRunning = 0;
  this.difficultyLevel = 1;
  this.boardView = new BoardView;

}

Game.prototype.secondsRunning = function() {
  return Math.floor(this.coreTimer / this.frameRate);
};

function startGame() {
  var game = new Game;
}

Game.prototype.startGameCycle = function() {
  this.coreLoopId = setInterval(this.coreGameLoop.bind(this), 1000 / this.frameRate);
};

Game.prototype.coreGameLoop = function() {
  this.coreTimer++;

  if (this.coreTimer % 25 === 0) {
    this.updateTime();
  }

  if (this.coreTimer % 3000 === 0) {
    this.difficultyLevel++;
  }
};

Game.prototype.updateTime = function() {
  View.updateTimer(this.secondsRunning());
};

});
