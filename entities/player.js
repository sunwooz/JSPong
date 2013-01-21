function Player(y) {
  this.x = 60;
  this.y = y;
  this.width = 5;
  this.height = 60;
  this.canBounce = true;

  var that = this;

  window.addEventListener('mousemove', function(event) {
    that.y = event.pageY;
  });
}

Player.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = 'Pink';
  ctx.fillRect(this.x, this.y-25, this.width, this.height);
}

