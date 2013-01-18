function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.velocity = new vec2(Math.cos(2) * 3, Math.sin(2) * 3);
  this.radius = 12;
}

Ball.prototype.draw = function() {
  ballCtx.beginPath();
  ballCtx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
  ballCtx.stroke();
}

Ball.prototype.update = function() {
  this.x += this.velocity.x;
  this.y += this.velocity.y;
}