var x = 1;

function Personajes(nombre) {
  this.nombre = nombre; //#players
  this.createPersonajes();
}

Personajes.prototype.createPersonajes = function(board, body) {
  var characters = $('<div>').addClass('comensals').css({
    width: 70,
    height: 70
  }).attr('id', 'character' + x);
  this.nombre.append(characters);
  x++;
};
$(document).ready(function(){
$(init);
function init() {
  $("#character1").draggable();
  $("#character2").draggable();
  $("#character3").draggable();
  $("#character4").draggable();
  $("#character5").draggable();
  $("#character6").draggable();
  $("#character7").draggable();
  $("#character8").draggable();
}

      });
