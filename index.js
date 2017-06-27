var board = new Board(4, 4);

function paintBoard(board, body) {
  board.grid.forEach(function(rowArray, i) {
    var row = $('<div>').addClass('row');
    for (var x = 0; x < rowArray.length; x++) {
      var column = $('<div>').addClass('column');
      row.append(column);
    }
    body.append(row);
  });
}

$(document).ready(function() {
  var body = $('#board');
  paintBoard(board, body);
});
var characters = new Characters(1, 8);

function paintCharacters(board, body) {
  characters.grid.forEach(function(rowArray, i) {
    var row = $('<div>').addClass('rows');
    for (var x = 0; x < rowArray.length; x++) {
      var column = $('<div>').addClass('characters' + x);
      row.append(column);
    }
    body.append(row);
  });
}

$(document).ready(function() {
  var body = $('#game-board');
  paintCharacters(board, body);
});
