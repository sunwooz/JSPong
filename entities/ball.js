function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.speed = 5;
  var _plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  var _randomAngle = Math.random()*45;
  this.velocity = new vec2(Math.cos(_randomAngle) * this.speed * _plusOrMinus, Math.sin(_randomAngle) * this.speed * _plusOrMinus);
  this.radius = 12;
}

function spawnBall() {
  ball = new Ball(newWidth/2, newHeight/2);
  ball.newXDirection();
  var _randomAngle = Math.random()*45;
  var _plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  ball.velocity = new vec2(Math.cos(_randomAngle) * ball.speed * _plusOrMinus, Math.sin(_randomAngle) * ball.speed * _plusOrMinus);
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

Ball.prototype.wallCollision = function() {
  if (this.y > newHeight) {
    this.oppositeYDirection();
  } else if ( this.y < 0) {
    this.oppositeYDirection();
  } else if ( this.x > newWidth) {
    alert('YOU WIN');
    spawnBall();
  } else if (this.x < 0) {
    alert('YOU LOSE');
    spawnBall();
  }
}

Ball.prototype.newXDirection = function() {
  var _plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  this.velocity.x *= _plusOrMinus;
  this.velocity.y *= _plusOrMinus;
}

Ball.prototype.oppositeYDirection = function() {
  this.velocity.x *= 1;
  this.velocity.y *= -1;
}

Ball.prototype.newXDirection = function() {
  this.velocity.x *= -1;
  this.velocity.x *= 1;
}