function Player(y) {
  this.x = 20;
  this.y = y;
  this.width = 20;
  this.height = 60;

  this.update = function() {
    $("#c").mousemove(function(event) {
      tempY = event.pageY;
    });
    this.y = tempY;
  }
}

Player.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = 'Pink';
  ctx.closePath();
  ctx.fillRect(this.x, this.y-25, this.width, this.height);
}

