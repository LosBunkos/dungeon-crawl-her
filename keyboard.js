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
handleClicks = function(board) {

  var keyToDirection = {
    // Arrow key-codes
    '37' : 'left',
    '38' : 'up',
    '39' : 'right',
    '40' : 'down',

    // wasd & WASD (caps)
    'a' : 'left',
    'w' : 'up',
    'd' : 'right',
    's' : 'down',

    'A' : 'left',
    'W' : 'up',
    'D' : 'right',
    'S' : 'down',

  }
  var move;
  $(document).keydown(function(e) {
    if (e.keyCode < 41) {
      e.preventDefault();
      console.log(e.which);
      move = e.keyCode;
    } else {
      move = String.fromCharCode(e.keyCode);
    }
    console.group('keypress');
    console.info('Notice: got keystroke: ' + move + ' (keyboard)');
    if (!board.player.won && board.isActive) {
      board.go(board.player, keyToDirection[move]);
    }
      console.groupEnd('keypress');
  });
}
