var BoardView = function() {
  for (var i = 0; i < 24; i++) {
    $('#boardView').append('<tr id="row-' + i + '"></tr>')
  }
  for (var i = 0; i < 24; i++) {
    for (var c = 0; c < 10; c++) {
      $('#row-' + i).append('<td class="col-' + c + '">[]</td>')
    }
  }
}

var Preview = function() {
for (var i = 0; i < 6; i++) {
    $('#preview').append('<tr id="row-' + i + '"></tr>')
  }
  for (var i = 0; i < 6; i++) {
    for (var c = 0; c < 6; c++) {
      $('#row-' + i).append('<td class="col-' + c + '">[]</td>')
    }
  }
}

BoardView.prototype.clearBoard = function(grid) {
  for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[r].length; c++) {
      $('#boardView #row-' + r + ' .col-' + c).css("color","white");
      $('#boardView #row-' + r + ' .col-' + c).css("background-color","white");
    }
  }
}

BoardView.prototype.renderBoard = function(grid, activePiece) {
  for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === "C") {
        $('#boardView #row-' + r + ' .col-' + c).css("color","black");
        $('#boardView #row-' + r + ' .col-' + c).css("background-color","black");
      }
      if (grid[r][c] === "X") {
        $('#boardView #row-' + r + ' .col-' + c).css("color",activePiece.color);
        $('#boardView #row-' + r + ' .col-' + c).css("background-color",activePiece.color);
      }
    }
  }
}

Preview.prototype.renderPreview = function(previewGrid, nextPiece) {
for (var r = 0; r < previewGrid.length; r++) {
    for (var c = 0; c < previewGrid[r].length; c++) {
      if (previewGrid[r][c] === "C") {
        $('#preview #row-' + r + ' .col-' + c).css("color",nextPiece.color);
        $('#preview #row-' + r + ' .col-' + c).css("background-color",nextPiece.color);
      }
    }
  }
};


Preview.prototype.clearPreview = function(previewGrid) {
  for (var r = 0; r < previewGrid.length; r++) {
    for (var c = 0; c < previewGrid[r].length; c++) {
      $('#preview #row-' + r + ' .col-' + c).css("color","white");
      $('#preview #row-' + r + ' .col-' + c).css("background-color","white");
    }
  }
}
