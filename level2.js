var intervals2 = []; 
var renderBoard2 = function() {
  intervals = intervals2;

  // remove 'go to level 2' button
  $('#refresh').css('display', 'none')

  $('#board').css({
    'padding-left' : '40px',
    'padding-right': '0',
    'padding-top': '100px', 
    'padding-bottom': '20px', 
  });

  // change default imgs
  ui2.playerImg = 'img/hero.gif';
  ui2.defaultImg = 'img/transparent.png';
  ui2.enemyImg = "img/enemy2.gif";
  ui2.wallImg = 'img/transparent.png';
  ui2.goldImg = 'img/gold.png';
  ui2.backgroundImg = 'img/dc-level-2.gif';
  ui2.chestImg = 'img/chest.gif';

  ui2.typeDic = [ui2.defaultImg,
    ui2.playerImg, ui2.enemyImg,
    ui2.wallImg, ui2.defaultImg,
    ui2.goldImg, ui2.chestImg];

  // init ui
  board2.ui = ui2;
  board2.init();

var player = new gameObj(board2, {x:0, y:0});
  player.type = 1;
  player.lvl = 2;
  board2.player = player;

  // Create Enemies
  var enemy1 = new gameObj(board2, {x:5, y:7});
  var enemy2 = new gameObj(board2, {x:5, y:15});
  var enemy3 = new gameObj(board2, {x:25, y:3});
  var enemy4 = new gameObj(board2, {x:18, y:8});
  var enemy5 = new gameObj(board2, {x:23, y:15});
  var enemy6 = new gameObj(board2, {x:1, y:16});
  var enemy7 = new gameObj(board2, {x:20, y:10});

  // create gold
  var gold1 = new gameObj(board2, {x:2, y:2});
  gold1.type = 5;
  var gold2 = new gameObj(board2, {x:20, y:2});
  gold2.type = 5;
  var gold3 = new gameObj(board2, {x:2, y:20});
  gold3.type = 5;
  var gold4 = new gameObj(board2, {x:15, y:20});
  gold4.type = 5;

  // Create Chest
  var chest1 = new gameObj(board2, {x:4, y:22});
  var chest2 = new gameObj(board2, {x:5, y:23});
  chest1.type = 6;
  chest2.type = 6;

  // Create Walls
  newWall(board2, {x:27, y:17}, 1, 8);
  newWall(board2, {x:7, y:17}, 1, 8);
  // and water
  newWall(board2, {x:0, y:8}, 19, 5);
  newWall(board2, {x:26, y:8}, 6, 5);
  // and door
  newWall(board2, {x:32, y:18}, 1, 7, 4);


  // Add Everyone
  // Enemies
  board2.addObj(enemy1);
  board2.addObj(enemy2);
  board2.addObj(enemy3);
  board2.addObj(enemy4);
  board2.addObj(enemy5);
  board2.addObj(enemy6);
  board2.addObj(enemy7);

  // Player
  board2.addObj(player);

  // Gold
  board2.addObj(gold1);
  board2.addObj(gold2);
  board2.addObj(gold3);
  board2.addObj(gold4);

  // Chest
  board2.addObj(chest1);
  board2.addObj(chest2);


  var mov1 = randomMove(enemy1, 100);
  var mov2 = randomMove(enemy2, 215, 5);
  var mov3 = randomMove(enemy3, 200, 4);
  var mov4 = randomMove(enemy4, 160, 2);
  var mov5 = randomMove(enemy5, 180, 6);
  var mov6 = randomMove(enemy6, 280, 1);
  var mov7 = autoMove(enemy7, 
    ['right', 'right', 'right', 'right', 'left', 'left', 'left', 'left', 'left']
  ,200);

  intervals2.push(mov1);
  intervals2.push(mov2);
  intervals2.push(mov3);
  intervals2.push(mov4);
  intervals2.push(mov5);
  intervals2.push(mov6);
  intervals2.push(mov7);

  handleClicks(board2);


}