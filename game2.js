var stopAll = function() {
  intervals.forEach(function(interval) {
    clearInterval(interval);
  });
}

var cleanBoard = function() {
  stopAll();
  ui = null;
  board.gameObjs.forEach(function(obj) {
    obj = null;
  });
  board = null;
}

var renderBoard2 = function() {

}