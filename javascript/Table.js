function Table(parent,comensales) {
  this.numComensales = comensales;
  this.comensalWidth = 80;
  this.sillas = [];
  this.parent = parent; //board
  this.createTable();
}

Table.prototype.createTable = function(board, body) {
  var n =  (this.numComensales % 2) ? this.numComensales + 1 : this.numComensales;
  var w = (this.comensalWidth * n) / 2;
  var h = 200;
  var mesa = $('<div>').addClass('mesa')
                       .css({
                          width: w,
                          height: h,
                          top: this.comensalWidth,
                          left: 0
                        });
  this.parent.append(mesa);

  // Parte de arriba de la mesa
  for(var i=0; i < Math.ceil(this.numComensales/2); i++){
    var silla = $('<div>').addClass('silla')
                          .css({
                            width:this.comensalWidth,
                            height: this.comensalWidth,
                            top: 0,
                            left: i*this.comensalWidth
                          });
    this.sillas.push(silla);
  }

  // Parte de abajo de la mesa
  for(var j=0; j < Math.floor(this.numComensales/2); j++){
    var silla = $('<div>').addClass('silla abajo')
                          .css({
                            width:this.comensalWidth,
                            height: this.comensalWidth,
                            top: h + this.comensalWidth,
                            left: j*this.comensalWidth
                          });
    this.sillas.push(silla);
  }
  var that = this;
  this.sillas.forEach(function(e){
    that.parent.append(e);
  });
};





  /*board.grid.forEach(function(rowArray, i) {
    var row = $('<div>').addClass('row');
    for (var x = 0; x < rowArray.length; x++) {
      var column = $('<div>').addClass('column').attr("col", i).attr("row", x);
      if (i === 0 || i === 3) {
        column.addClass('chair');
      }
      row.append(column);
    }
    body.append(row);
  });*/
