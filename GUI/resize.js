function resize() {
  // resize window to fit screen
  var gameArea = document.getElementById('gameArea');
  var widthToHeight = 4 / 3;
  newWidth = window.innerWidth;
  newHeight = window.innerHeight;
  var newWidthToHeight = newWidth / newHeight;

  if (newWidthToHeight > widthToHeight) {
    newWidth = newHeight * widthToHeight;
    gameArea.style.height = newHeight + 'px';
    gameArea.style.width = newWidth + 'px';
  } else {
    newHeight = newWidth / widthToHeight;
    gameArea.style.width = newWidth + 'px';
    gameArea.style.height = newHeight + 'px';
  }
  gameArea.style.marginTop = (-newHeight / 2) + 'px';
  gameArea.style.marginLeft = (-newWidth / 2) + 'px';

  canvas = document.getElementById('c');
  canvas.width = newWidth;
  canvas.height = newHeight;
  ctx = canvas.getContext('2d');
}