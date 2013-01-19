function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.speed = 5;
  this.velocity = new vec2(Math.cos(45) * this.speed * -1, Math.sin(25) * this.speed);
  this.radius = 12;
}

Ball.prototype.draw = function() {
  ballCtx.beginPath();
  ballCtx.fillStyle = 'Green';
  ballCtx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
  ballCtx.closePath();
  ballCtx.fill();
}

Ball.prototype.update = function() {
  this.x += this.velocity.x;
  this.y += this.velocity.y;
}

function checkCollission() {
  if (ball.y > HEIGHT) {
    ball.newYDirection();
  } else if ( ball.y < 5) {
    ball.newYDirection();
  } else if ( ball.x > WIDTH) {
    ball.newXDirection();
  } else if (ball.x < 0) {
    ball.newXDirection();
  } else if (Math.round(ball.x) == player.x+25 &&
             Math.round(ball.y)-25 <= player.y &&
             Math.round(ball.y)+25 >= player.y) {
    ball.newXDirection();
  }
}

Ball.prototype.newYDirection = function() {
  this.velocity.x *= 1;
  this.velocity.y *= -1;
}

Ball.prototype.newXDirection = function() {
  this.velocity.x *= -1;
  this.velocity.x *= 1;
}