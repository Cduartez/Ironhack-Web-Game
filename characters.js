function Characters (width, height){
  this.width = width;
  this.height = height;
  this.grid = this._generateGrid();
}

Characters.prototype._generateGrid = function(){
  return Array.apply(null, Array(this.width)).map(e => Array(this.height));
};






// //var characters = ["Bob", "Peter", "Fred", "Richard", "Lois", "Pam", "Rachel", "x"];
// var characters = new Characters(1, 8);
//
// function paintCharacters(board, body) {
//   board.grid.forEach(function(rowArray, i) {
//     var row = $('<div>').addClass('row');
//     for (var x = 0; x < rowArray.length; x++) {
//       var column = $('<div>').addClass('column');
//       row.append(column);
//     }
//     body.append(row);
//   });
// }
//
// $(document).ready(function() {
//   var characters = $('#board');
//   paintCharacters(board, body);
// });
