function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.speed = 5;
  this.canBounce = true;
  var _plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  var _randomAngle = Math.random()*45;
  this.velocity = new vec2(Math.cos(_randomAngle) * this.speed * _plusOrMinus, Math.sin(_randomAngle) * this.speed * _plusOrMinus);
  this.radius = 16;
}

function spawnBall() {
  ball = new Ball(newWidth/2, newHeight/2);
  ball.newXDirection();
  var _randomAngle = Math.random()*45;
  var _plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  ball.velocity = new vec2(Math.cos(_randomAngle) * ball.speed * _plusOrMinus, Math.sin(_randomAngle) * ball.speed * _plusOrMinus);
}

Ball.prototype.draw = function() {
  ctx.drawImage(image, xPos, yPos, frameXSize, frameXSize, this.x, this.y, frameXSize, frameXSize);
  xPos += frameXSize;
  index += 1;
  if (index >= 60) {
    index = 0;
    xPos = 0;
    yPos = 0;
  }
  else if (xPos + frameXSize > image.width) {
    xPos = 0;
    yPos += frameXSize;
  }
}

Ball.prototype.update = function() {
  this.x += this.velocity.x;
  this.y += this.velocity.y;
}

Ball.prototype.wallCollision = function() {
  if (this.y > newHeight-50) {
    this.oppositeYDirection();
  } else if ( this.y < 0-15) {
    this.oppositeYDirection();
  } else if ( this.x > newWidth) {
    spawnBall();
  } else if (this.x < -40) {
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

Ball.prototype.oppositeXDirection = function() {
  this.velocity.x *= -1;
  this.velocity.x *= 1;
}