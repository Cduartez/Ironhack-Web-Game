var board = new Board(4, 4);

function paintBoard(board, body) {
  board.grid.forEach(function(rowArray, i) {
    var row = $('<div>').addClass('row');
    for (var x = 0; x < rowArray.length; x++) {
      var column = $('<div>').addClass('column');
      if(i===0 || i===3){
        column.addClass('chair');
      }
      row.append(column);
    }
    body.append(row);
  });
}

$(document).ready(function() {
  var body = $('#board');
  paintBoard(board, body);

  $('.chair').droppable( {
    drop: handleDropEvent
  } );


function handleDropEvent( event, ui ) {
  var draggable = ui.draggable;
  alert( 'The panda with ID "' + draggable.attr('id') + '" was dropped onto me!' );
}
});



var characters = new Characters(1, 8);

function paintCharacters(board, body) {
  characters.grid.forEach(function(rowArray, i) {
    var row = $('<div>').addClass('row');
    for (var x = 0; x < rowArray.length; x++) {
      var column = $('<div>').attr("id",'characters' + x);
      row.append(column);
    }
    body.append(row);
  });
}

$(document).ready(function() {
  var body = $('#game-board');
  paintCharacters(board, body);
  $('#characters0').draggable();
  $('#characters1').draggable();
  $('#characters2').draggable();
  $('#characters3').draggable();
  $('#characters4').draggable();
  $('#characters5').draggable();
  $('#characters6').draggable();
  $('#characters7').draggable();
});
