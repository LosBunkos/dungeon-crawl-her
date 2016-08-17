// Set up directions for autoMove
var dirs1 = ['up', 'right', 'right', 'down', 'down', 'left', 'left', 'up'];
var dirs2 = ['up', 'right', 'down', 'down', 'down', 'left', 'up', 'up'];

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

// Just for testing purposes
// Board initialization
var board = new Board(25);
board.width = 33;
var ui = new UI(board);
board.init();
ui.initBoard();
board.ui = ui;
board.init();
// ui.initBoard(board);

// Create Player
var player = new gameObj(board, {x:0, y:0});
player.type = 1;
board.player = player;

// Create Enemies
var enemy1 = new gameObj(board, {x:5, y:7});
var enemy2 = new gameObj(board, {x:5, y:15});
var enemy3 = new gameObj(board, {x:25, y:3});
var enemy4 = new gameObj(board, {x:20, y:20});
var enemy5 = new gameObj(board, {x:18, y:10});
var enemy6 = new gameObj(board, {x:2, y:12});
var enemy7 = new gameObj(board, {x:11, y:10});

// create gold
var gold1 = new gameObj(board, {x:2, y:2});
gold1.type = 5;
var gold2 = new gameObj(board, {x:20, y:2});
gold2.type = 5;
var gold3 = new gameObj(board, {x:2, y:20});
gold3.type = 5;
var gold4 = new gameObj(board, {x:15, y:20});
gold4.type = 5;

// Create Walls
newWall(board, {x:0, y:8}, 10, 2);
newWall(board, {x:22, y:16}, 12, 2);

// and door
newWall(board, {x:31, y:18}, 2, 7, 4);


// Add Everyone
// Enemies
board.addObj(enemy1);
board.addObj(enemy2);
board.addObj(enemy3);
board.addObj(enemy4);
board.addObj(enemy5);
board.addObj(enemy6);
board.addObj(enemy7);

// Player
board.addObj(player);

// Gold
board.addObj(gold1);
board.addObj(gold2);
board.addObj(gold3);
board.addObj(gold4);

var mov1 = randomMove(enemy1, 100);
var mov2 = randomMove(enemy2, 245, 10);
var mov3 = randomMove(enemy3, 220, 4);
var mov4 = randomMove(enemy4, 250, 3);
var mov5 = randomMove(enemy5, 250, 1);
var mov6 = randomMove(enemy6, 250, 5);
var mov7 = randomMove(enemy7, 150, 2);

handleClicks();