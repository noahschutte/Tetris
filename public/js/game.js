$(document).ready(function() {

  $('#start-game-button').on('click', function(event) {
    startGame();
  })

function Game() {
  this.frameRate = 25;
  this.coreTimer = 0;
  this.timeRunning = 0;
  this.difficultyLevel = 1;
}

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
};

Game.prototype.startGameCycle = function() {
  setInterval(this.coreGameLoop.bind(this), 1000 / this.frameRate);
};

});
