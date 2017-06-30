function Timer() {
  this.timer = 40;
  this.timeOutId = 40;
  this._checkTimer();
}

Timer.prototype._checkTimer = function() {
  $('#counter').text(this.timer);
  if (this.timer >= 0 && this.timer <= 40) {
    this.timer--;
    this.timeOutId = setTimeout(this._checkTimer.bind(this), 1000);
  } else {
    $('#counter').text("Time is over!!");
  }
};
