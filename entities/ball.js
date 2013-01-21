function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.speed = 5;
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  var randomAngle = Math.random()*45;
  this.velocity = new vec2(Math.cos(randomAngle) * this.speed * plusOrMinus, Math.sin(randomAngle) * this.speed * plusOrMinus);
  this.radius = 12;
}

Ball.prototype.draw = function() {
  ctx.fillStyle = 'Green';
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
  ctx.fill();
  ctx.strokeStyle = 'yellow';
  ctx.stroke();
}

Ball.prototype.update = function() {
  this.x += this.velocity.x;
  this.y += this.velocity.y;
}

Ball.prototype.checkCollision = function() {
  if (this.y > newHeight) {
    this.newYDirection();
  } else if ( this.y < 0) {
    this.newYDirection();
  } else if ( this.x > newWidth) {
    this.newXDirection();
  } else if (this.x < 0) {
    this.newXDirection();
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