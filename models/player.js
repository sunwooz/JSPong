function Player(y) {
  this.x = 20;
  this.y = y;
  this.width = 20;
  this.height = 60;

  this.update = function() {
    $("#canvas").mousemove(function(event) {
      tempY = event.pageY;
    });
    this.y = tempY;
  }
}

Player.prototype.draw = function() {
  ctx.fillRect(this.x, this.y-120, this.width, this.height);
}

