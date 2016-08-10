handleClicks = function() {
  var keyToDirection = {
    'w' : 'up',
    's' : 'down',
    'a' : 'left',
    'd' : 'right'
  }
  var move;
  $(document).keypress(function(e) {
    move = String.fromCharCode(e.which);
    console.info('Notice: got keystroke: ' + move + ' (keyboard)');
    if(ui.board.go(keyToDirection[move])) {
      ui.renderBoardChanges();
    }
  });
}