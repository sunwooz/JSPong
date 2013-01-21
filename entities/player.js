function Player(y) {
  this.x = 60;
  this.y = y;
  this.width = 5;
  this.height = 60;

  var _that = this;

  window.addEventListener('mousemove', function(event) {
    _that.y = event.pageY;
  });
}

Player.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = 'Pink';
  ctx.fillRect(this.x, this.y-25, this.width, this.height);
}

function spawnPlayer() {
  player = new Player(20);
}

function paddleXCollision() {
  return (ball.x - player.x);
}

function ballHitPaddle() {
  if (paddleXCollision() <= player.width && ball.y >= player.y && ball.y <= player.y + player.height && ball.canBounce == true) {
    ball.newXDirection();
    ball.canBounce = false;
    window.setTimeout(function() {
      ball.canBounce = true;
    }, 2000)
  }
}