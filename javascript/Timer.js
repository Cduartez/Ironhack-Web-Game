function Timer() {
  this.timer = 20;
  this.timeOutId = 20;
  this._checkTimer();
}

Timer.prototype._checkTimer = function() {
  $('#counter').text(this.timer);
  if (this.timer >= 0 && this.timer <= 20) {
    this.timer--;
    this.timeOutId = setTimeout(this._checkTimer.bind(this), 1000);
  } else {
    $('#counter').text("Time is over!!");
  }
};
