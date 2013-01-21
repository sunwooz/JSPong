function resize() {
  //resize window to fit screen
  var _gameArea = document.getElementById('gameArea');
  var _widthToHeight = 4 / 3;
  newWidth = window.innerWidth;
  newHeight = window.innerHeight;
  var _newWidthToHeight = newWidth / newHeight;

  if (_newWidthToHeight > _widthToHeight) {
      newWidth = newHeight * _widthToHeight;
      _gameArea.style.height = newHeight + 'px';
      _gameArea.style.width = newWidth + 'px';
  } else {
      newHeight = newWidth / _widthToHeight;
      _gameArea.style.width = newWidth + 'px';
      _gameArea.style.height = newHeight + 'px';
  }

  _gameArea.style.marginTop = (-newHeight / 2) + 'px';
  _gameArea.style.marginLeft = (-newWidth / 2) + 'px';

  canvas = document.getElementById('c');
  ctx = canvas.getContext('2d');
  canvas.width = newWidth;
  canvas.height = newHeight;
}

function resizeWindow() {
  resize();
  window.addEventListener('resize', function() {
    resize();
  });
}