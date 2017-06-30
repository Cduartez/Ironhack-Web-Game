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
