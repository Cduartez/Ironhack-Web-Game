var board = new Board(4,3);

function paintBoard(board, body){
  board.grid.forEach(function(rowArray, i){
    var row = $('<div>').addClass('row');
    for(var x = 0; x<rowArray.length; x++){
      var column = $('<div>').addClass('column');
      row.append(column);
    }
    body.append(row);
  });
}

$(document).ready(function(){
  var body = $('#board');

  paintBoard(board, body);
});
