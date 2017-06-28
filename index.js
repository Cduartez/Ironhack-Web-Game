var board = new Board(4, 4);

function paintBoard(board, body) {
  board.grid.forEach(function(rowArray, i) {
    var row = $('<div>').addClass('row');
    for (var x = 0; x < rowArray.length; x++) {
      var column = $('<div>').addClass('column').attr("col", i).attr("row", x);
      if (i === 0 || i === 3) {
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

  $('.chair').droppable({
    drop: handleDropEvent
  });

  // console.log( $(ui.draggable[0]).attr('id') )
  // MESA ES EL OBJETO --BOARD--
  // PERSONAJES ESTAN EN EL OBJETO --CHARACTERS--
  function handleDropEvent(event, ui) {
    var draggable = ui.draggable;
    // Poner elemento en Array --OBJETIVO--
    // Identificar elemento que estamos arrastrando
    // guardarlo en la posicion del array correspondiente
    var droppedCol = $(event.target).attr("col");
    var droppedRow = $(event.target).attr("row");

    board.grid[droppedCol][droppedRow] = draggable.attr('id');
    alert('The panda with ID "' + draggable.attr('id') + '" was dropped onto me!');
  }
});


var cualquiera = new Character('cualquiera', 'manolo', 'maria');
var manolo = new Character('manolo', 'maria', 'cualquiera');
var maria = new Character('maria', 'manolo', 'cualquiera');

function paintCharacters(characters, body) {
  var row = $('<div>').addClass('row');
  characters.forEach(function(character, index) {
    var column = $('<div>').attr("id", character.name).draggable();
    row.append(column);
  });
  body.append(row);
}
var characters = new Array(cualquiera, manolo, maria);
// var characters = [cualquiera, manolo, maria];

$(document).ready(function() {
  var body = $('#game-board');
  paintCharacters(characters, body);
});
