// var board = new Board(10);
// board.init();
// var player = new gameObj(board, {x:4,y:3});
// player.type = 1;
// var enemy = new gameObj(board, {x:6, y:3});
// board.addObj(player);
// board.addObj(enemy);
// board.addAllObjsToBoard();
// var ui = new UI(board);
// ui.initBoard();
handleClicks = function(callback) {
  var keyToDirection = {
    'w' : 'up',
    's' : 'down',
    'a' : 'left',
    'd' : 'right'
  }
  var move;
  if (typeof callback == 'function') {
    callback();
  }
  $(document).keypress(function(e) {
    move = String.fromCharCode(e.which);
    console.group('keypress');
    console.info('Notice: got keystroke: ' + move + ' (keyboard)');
    player.go(keyToDirection[move])
    console.groupEnd('keypress');
  });
}
