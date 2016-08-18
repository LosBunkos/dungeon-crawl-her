// Board initialization
var board = new Board(25);
board.width = 33;
var ui = new UI(board);
board.ui = ui;
board.init();

var renderBoard1 = function() {
  // init ui
  board.ui = ui;
  board.init();

  // Set up directions for autoMove
  var dirs1 = ['up', 'right', 'right', 'down', 'down', 'left', 'left', 'up'];
  var dirs2 = ['up', 'right', 'down', 'down', 'down', 'left', 'up', 'up'];


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
  newWall(board, {x:23, y:16}, 11, 2);

  // and door
  newWall(board, {x:32, y:18}, 1, 7, 4);


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
  var mov2 = randomMove(enemy2, 205, 6);
  var mov3 = randomMove(enemy3, 200, 4);
  var mov4 = randomMove(enemy4, 220, 3);
  var mov5 = randomMove(enemy5, 220, 2);
  var mov6 = randomMove(enemy6, 220, 5);
  var mov7 = randomMove(enemy7, 100, 3);
  intervals.push(mov1);
  intervals.push(mov2);
  intervals.push(mov3);
  intervals.push(mov4);
  intervals.push(mov5);
  intervals.push(mov6);
  intervals.push(mov7);

  handleClicks(board);
}