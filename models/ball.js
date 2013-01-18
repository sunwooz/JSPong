function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.velocity = new vec2(Math.cos(45) * 3, Math.sin(45) * 3);
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

function checkCollission() {
  if (ball.y > 600) {
    ball.newYVelocity();
  } else if ( ball.y < 5) {
    ball.newYVelocity();
  } else if ( ball.x > WIDTH) {
    ball.newXVelocity();
  } else if (ball.x < 0) {
    ball.newXVelocity();
  }
}

Ball.prototype.newYVelocity = function() {
  this.velocity.x *= 1;
  this.velocity.y *= -1;
}

Ball.prototype.newXVelocity = function() {
  this.velocity.x *= -1;
  this.velocity.x *= 1;
}