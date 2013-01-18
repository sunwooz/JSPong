function Player(y) {
  this.x = 20;
  this.y = y;
  this.width = 20;
  this.height = 60;

  this.update = function() {
    $("#ballCanvas").mousemove(function(event) {
      tempY = event.pageY;
    });
    this.y = tempY;
  }
}

Player.prototype.draw = function() {
  playerCtx.fillRect(this.x, this.y-25, this.width, this.height);
}

