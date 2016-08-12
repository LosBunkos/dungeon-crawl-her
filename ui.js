var UI = function(board) {
  this.board = board;


  // Where all the divs go:
  this.$boardContainer = $('#board');
  this.playerColor = 'black';
  this.defaultColor = 'white';
  this.enemyColor = 'red';

  this.divTemp = function(x, y, type) {
    return "<div data-x='" + x +
              "' data-y='" + y +
              "' data-type='" + type + 
              "'class='square'>" +
           "</div>";
  };


  this.initBoard = function(board) {
    console.time('ui.initBoard');
    var tempBoard = '' ;
    this.$boardContainer.empty();

    for (var i = 0; i < board.height; i++) {
      for (var j = 0; j < board.width; j++) {
        tempBoard += this.divTemp(j, i, board.board[i][j]);
      }
    }
    this.$boardContainer.append(tempBoard);

    $('[data-type=1]').css('background-color', this.playerColor);
    $('[data-type=2]').css('background-color', this.enemyColor);

    $('.square').css('width',((100 / board.width) + '%'));
    $('.square').css('height',((100 / board.height) + '%'));

    console.timeEnd('ui.initBoard');
  };
};