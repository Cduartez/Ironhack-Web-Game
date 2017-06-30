var counter;

$(document).ready(function() {
  $(".start-game").click(function(){
    counter = new Timer();
  });

  var board = $('#game-board');
  var mesa = new Table(board,8);

  var container = $('#players');
  var names = [
    'Moracho',
    'José',
    'Teresa',
    'Fernanda',
    'Mónica',
    'Ana',
    'Rosa',
    'Salva'
  ];
  var numPersonajes = 8;
  var personajes = [];
  for(var i = 0; i< numPersonajes; i++){
    personajes.push(new Personajes(
      container,
      names[i],
      names[Math.floor((Math.random() * (names.length / 2)) + 1)],
      names[Math.floor((Math.random() * names.length) + 1)]
    ));
    // personajes.push(new Personajes(names[i]));
  }
  console.log(personajes);
});

//
//   // console.log( $(ui.draggable[0]).attr('id') )
//   // MESA ES EL OBJETO --BOARD--
//   // PERSONAJES ESTAN EN EL OBJETO --CHARACTERS--
  function handleDropEvent(event, ui) {
    var draggable = ui.draggable;
//     // Poner elemento en Array --OBJETIVO--
//     // Identificar elemento que estamos arrastrando
//     // guardarlo en la posicion del array correspondiente
    var droppedCol = $(event.target).attr("col");
    var droppedRow = $(event.target).attr("row");
//
//     board.grid[droppedCol][droppedRow] = draggable.attr('id');
//     alert('The panda with ID "' + draggable.attr('id') + '" was dropped onto me!');
}
//
//
// var cualquiera = new Character('cualquiera', 'manolo', 'maria');
// var manolo = new Character('manolo', 'maria', 'cualquiera');
// var maria = new Character('maria', 'manolo', 'cualquiera');
//
// function paintCharacters(characters, body) {
//   var row = $('<div>').addClass('row');
//   characters.forEach(function(character, index) {
//     var column = $('<div>').attr("id", character.name).draggable();
//     row.append(column);
//   });
//   body.append(row);
// }
// var characters = new Array(cualquiera, manolo, maria);
// // var characters = [cualquiera, manolo, maria];
//
// $(document).ready(function() {
//   var body = $('#game-board');
//   paintCharacters(characters, body);
// });
//
//
