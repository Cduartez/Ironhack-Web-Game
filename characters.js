function Characters(width, height) {
  this.width = width;
  this.height = height;
  this.grid = this._generateGrid();
}

Characters.prototype._generateGrid = function() {
  return Array.apply(null, Array(this.width)).map(e => Array(this.height));
};

//DRAGG
