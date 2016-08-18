var intervals = []; 
var renderBoard2 = function() {
  $('#board').css({
    'padding-top' : '40px',
    'padding-right': '20px',
    'padding-top': '100px', 
    'padding-bottom': '20px', 
  });

  var board2 = new Board(25);
  board2.width = 33;
  var ui2 = new UI(board2);

  ui2.playerImg = 'img/hero.png';
  ui2.defaultImg = 'img/transparent.png';
  ui2.enemyImg = "img/enemy.png";
  ui2.wallImg = 'img/transparent.png';
  ui2.goldImg = 'img/gold.png';
  ui2.backgroundImg = 'img/dc-level-2.png';

  board2.ui = ui2;
  board2.init();

var player = new gameObj(board2, {x:0, y:0});
  player.type = 1;
  board2.player = player;

  // Create Enemies
  var enemy1 = new gameObj(board2, {x:5, y:7});
  var enemy2 = new gameObj(board2, {x:5, y:15});
  var enemy3 = new gameObj(board2, {x:25, y:3});

  // create gold
  var gold1 = new gameObj(board2, {x:2, y:2});
  gold1.type = 5;
  var gold2 = new gameObj(board2, {x:20, y:2});
  gold2.type = 5;
  var gold3 = new gameObj(board2, {x:2, y:20});
  gold3.type = 5;
  var gold4 = new gameObj(board2, {x:15, y:20});
  gold4.type = 5;

  // Create Walls
  newWall(board2, {x:27, y:17}, 1, 8);
  newWall(board2, {x:8, y:17}, 1, 8);
  // and water
  newWall(board2, {x:0, y:9}, 20, 4);
  newWall(board2, {x:26, y:9}, 6, 4);
  // and door
  newWall(board2, {x:32, y:18}, 1, 7, 4);


  // Add Everyone
  // Enemies
  board2.addObj(enemy1);
  board2.addObj(enemy2);
  board2.addObj(enemy3);

  // Player
  board2.addObj(player);

  // Gold
  board2.addObj(gold1);
  board2.addObj(gold2);
  board2.addObj(gold3);
  board2.addObj(gold4);

  var mov1 = randomMove(enemy1, 100);
  var mov2 = randomMove(enemy2, 245, 10);
  var mov3 = randomMove(enemy3, 220, 4);

  intervals.push(mov1);
  intervals.push(mov2);
  intervals.push(mov3);

  handleClicks(board2);


}