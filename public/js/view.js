var BoardView = function() {
  for (i = 0; i < 24; i++) {
    $('#boardView').append('<tr id="row-' + i + '"></tr>')
  }
  for (i = 0; i < 24; i++) {
    for (c = 0; c < 10; c++) {
      $('#row-' + i).append('<td class="col-' + c + '">[]</td>')
    }
  }
}

