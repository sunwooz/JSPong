$('#fullscreen').click(function() {
  var el = document.getElementById('canvas');
  if (el.webkitRequestFullScreen) {
    el.webkitRequestFullScreen();
  } else {
    el.mozRequestFullScreen();
  }
  document.body.style.cursor = 'none';
});
