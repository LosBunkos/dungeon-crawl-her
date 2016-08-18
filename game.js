// state
var intervals = [];
var score = 0;

// init both levels
// Level 1
var board = new Board(25);
board.width = 33;
var ui = new UI(board);

// Level2
var board2 = new Board(25);
board2.width = 33;
var ui2 = new UI(board2);

var stopAll = function(intervals) {
  intervals.forEach(function(interval) {
    clearInterval(interval);
  });
}

var flushBoard = function() {
  // $('#board').empty();
  // $('.square > img').remove();
  $(document).remove('.square');
}

var cleanBoard = function(board) {
  stopAll(intervals);
  // ui = null;
  // board.gameObjs.splice(0, board.gameObjs.length);
  board.gameObjs.forEach(function(obj) {
    board.delObj(obj);
  });
  board.isActive = false;
  board = null;
  flushBoard();
}

var autoMove = function(enemy, dirs, time) {
  var i = 0;
  return setInterval(function() {
    enemy.go(dirs[i % dirs.length]);
    i++;
  }, time);
}
var randomMove = function(enemy, time, changeEvery) {
  if (typeof changeEvery === 'undefined') {
    changeEvery = 2;
  }
  var i = 0;
  var dir = '';
  return setInterval(function() {
    var dirs = ['up', 'down', 'right', 'left'];
    if (i % changeEvery == 0) {
      var num = Math.floor(Math.random() * 4);
      dir = dirs[num];
    }
    enemy.go(dir);
    i++;
  }, time)
}

renderBoard1();