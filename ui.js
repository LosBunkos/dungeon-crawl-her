var UI = function(board) {
  this.board = board;


  this.$boardContainer = $('#board');
  this.playerColor = 'url("img/hero.png") no-repeat';
  this.defaultColor = 'rgba(0,0,0,0)';
  this.enemyColor = 'url("img/enemy.png") no-repeat';

  this.typeDic = [this.defaultColor,
    this.playerColor, this.enemyColor,
    this. projectileColor];

  this.divTemp = function(x, y, type) {
    return "<div data-x='" + x +
              "' data-y='" + y +
              "' data-type='" + type + 
              "'class='square'>" +
           "</div>";
  };


  this.initBoard = function() {
    console.time('ui.initBoard');
    var tempBoard = '' ;
    this.$boardContainer.empty();

    for (var i = 0; i < this.board.height; i++) {
      for (var j = 0; j < this.board.width; j++) {
        tempBoard += this.divTemp(j, i, board.board[i][j]);
      }
    }
    this.$boardContainer.append(tempBoard);

    $('[data-type=1]').css('background', this.playerColor);
    $('[data-type=2]').css('background', this.enemyColor);

    $('.square').css('width',((100 / board.width) + '%'));
    $('.square').css('height',((100 / board.height) + '%'));

    console.timeEnd('ui.initBoard');
  };

  this._selectCoor = function(x, y) {
    return  $('[data-y=' + y + '][data-x=' + x + ']');
  };

  // Accepts coordinates to turn white
  // And array of coordinates to color according to type. 
  this.renderChanges = function(add, type, rem) {
    console.time('ui.renderChanges');
    if(typeof rem !== 'undefined') {
      this._selectCoor(rem.x, rem.y).css('background', this.defaultColor);
    }
   
    this._selectCoor(add.x, add.y).css('background', this.typeDic[type]);
    console.timeEnd('ui.renderChanges');
  };

  // Wall objects 

  $()


};

