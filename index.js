//Board

var board = [];

for (var x = 0; x < 24; x++) {
  board[x] = [];
  for (var y = 0; y < 24; y++) {
    board[x][y] = ".";
  }
}


//Pig
$(document).on('keydown', function(e) {
  var x = $("#player1").position().top;
  if (event.keyCode === 38) {
    if (x <= -246) {
      return;
    }
    $("#player1").css({
      top: x -= 10
    });
  } else if (event.keyCode === 40) {
    if (x >= 300) {
      return;
    }
    $("#player1").css({
      top: x += 10
    });
  }
});


//Monsters
