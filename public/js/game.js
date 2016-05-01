$(document).ready(function() {

  $('#start-game-button').on('click', function(event) {
    game.startGameCycle();
  })

function Game() {
  this.board = new Board();
  this.boardView = new BoardView();
  this.preview = new Preview();
  this.frameRate = 25;
  this.coreTimer = 0;
  this.timeRunning = 0;
  this.score = 0;
  this.difficultyLevel = 0;
  this.activePiece = this.newPiece();
  this.nextPiece = this.newPiece();
  this.intervalId = null
}

var shapesArray = ["L", "J", "T", "LINE", "Z", "S", "BOX"]

Game.prototype.newPiece = function() {
  return new Piece(shapesArray[Math.floor(Math.random()*7)], "red")
};

var game = new Game();

Game.prototype.updateTime = function() {
  $('#timer').html(this.secondsRunning());
};

Game.prototype.scorePoints = function() {
  this.score += (10 * this.board.completeRows().length * this.board.completeRows().length);
}

Game.prototype.updateScore = function() {
  $('#score').html(this.score);
}

Game.prototype.updateLevel = function() {
  $('#level').html(this.difficultyLevel + 1);
}

Game.prototype.secondsRunning = function() {
  return Math.floor(this.coreTimer / this.frameRate);
};

Game.prototype.refreshBoard = function() {
  this.board.clearActivePiece();
  this.board.placeActivePiece(this.activePiece);
  this.boardView.clearBoard(this.board.grid);
  this.boardView.renderBoard(this.board.grid, this.activePiece);
  this.scorePoints();
  this.updateScore();
  this.board.deleteCompleteRows(this.board);
}

Game.prototype.refreshPreview = function() {
  this.board.clearNextPiece();
  this.board.placeNextPiece(this.nextPiece);
  this.preview.clearPreview(this.board.previewGrid);
  this.preview.renderPreview(this.board.previewGrid, this.nextPiece);
}

Game.prototype.coreGameLoop = function() {
  if (!this.board.deadSquareAtTop(this.board)) {
    this.coreTimer++;

    if (this.coreTimer % 10 === 0) {
      this.updateTime();
    }

    if (this.coreTimer % (15 - this.difficultyLevel) === 0) {
      if (this.board.canMoveDown(this.activePiece)) {
        this.activePiece.moveDown();
      } else {
        this.board.settle(this.activePiece);
        this.activePiece = this.nextPiece;
        this.nextPiece = this.newPiece();
        this.refreshPreview();
      }
    };

    if (this.coreTimer % 2500 === 0 && this.difficultyLevel < 14) {
      this.difficultyLevel++
      this.updateLevel();
    }

    this.refreshBoard();
  } else {
    this.endGameCycle()
  }
};

Game.prototype.startGameCycle = function() {
  this.refreshPreview();
  this.intervalId = setInterval(this.coreGameLoop.bind(this), 1000 / this.frameRate);
};

Game.prototype.endGameCycle = function() {
  clearInterval(this.intervalId)
  $('#hidden').show();
};

$(document).on('keyup', function(event) {
  event.preventDefault();
  if(event.keyCode == 37 && game.board.canMoveLeft(game.activePiece)) {
    game.activePiece.moveLeft();
  };
  if(event.keyCode == 38 && game.board.canRotate(game.activePiece)) {
    game.activePiece.rotate();
  };
  if(event.keyCode == 39 && game.board.canMoveRight(game.activePiece)) {
    game.activePiece.moveRight();
  };
  if(event.keyCode == 40 && game.board.canMoveDown(game.activePiece)) {
     game.activePiece.moveDown();
  };
  if(event.keyCode == 32 && game.board.canMoveDown(game.activePiece)) {
    while (game.board.canMoveDown(game.activePiece)) {
      game.activePiece.moveDown(); 
    }
  };
  game.refreshBoard();
});

});
