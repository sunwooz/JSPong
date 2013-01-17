function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.radius = 12;
}

Ball.prototype.draw = function() {
  ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
  ctx.fill();
}