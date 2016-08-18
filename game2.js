var renderBoard2 = function() {
  var board2 = new Board(25);
  board2.width = 33;
  var ui2 = new UI(board);
  board2.init();
  ui2.initBoard();
  board.ui = ui2;
  board2.init();
}