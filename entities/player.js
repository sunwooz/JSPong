function Player(y) {
  this.x = 60;
  this.y = y;
  this.width = 20;
  this.height = 60;

  var that = this;

  $('#c').mousemove(function(event) {
    that.y = event.pageY;
  });
}

Player.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = 'Pink';
  ctx.fillRect(this.x, this.y-25, this.width, this.height);
}

