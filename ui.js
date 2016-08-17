var UI = function(board) {
  this.board = board;


  this.$boardContainer = $('#board');
  this.playerColor = 'img/hero.png';
  this.defaultColor = 'img/transparent.png';
  this.enemyColor = "img/enemy.png";
  this.wallColor = 'img/transparent.png';
  this.goldColor = 'img/gold.png';
  
  this.typeDic = [this.defaultColor,
    this.playerColor, this.enemyColor,
    this.wallColor, this.defaultColor,
    this.goldColor];

  this.imgize = function(string) {
    return '<img src="' + string + '""></img>'
  }

  this.divTemp = function(x, y, type) {
    return "<div id='y-" + y + "-x-" + x + "'" +
              "data-type='" + type + "'" +
              "class='square'>" +
           "</div>";
  };


  this.initBoard = function() {
    //console.time('ui.initBoard');
    var tempBoard = '' ;
    this.$boardContainer.empty();

    for (var i = 0; i < this.board.height; i++) {
      for (var j = 0; j < this.board.width; j++) {
        tempBoard += this.divTemp(j, i, board.board[i][j]);
      }
    }
    this.$boardContainer.append(tempBoard);

    $('[data-type=1]').html(this.imgize(this.playerColor))
      .css('z-index', '999');
      
    $('[data-type=2]').html(this.imgize(this.enemyColor));
    $('[data-type=5]').html(this.imgize(this.goldColor));


    $('.square').css('width',((100 / board.width) + '%'))
      .css('height',((100 / board.height) + '%'));

    //console.timeEnd('ui.initBoard');
  };

  this._selectCoor = function(x, y) {
    return  $('#y-' + y + '-x-' + x);
  };

  // Accepts coordinates to turn white
  // And array of coordinates to color according to type. 
  this.renderChanges = function(add, type, rem) {
    //console.time('ui.renderChanges');
    if(typeof rem !== 'undefined') {
      this._selectCoor(rem.x, rem.y).html('');
    }
    
    // save selector to variable
    var addSelector = this._selectCoor(add.x, add.y);

    // instead of changing to transparent img, del html content
    if (type === 0) {
      addSelector.html('')
    // if not changine to transparent, regular img changing.
    } else {
      addSelector.html(this.imgize(this.typeDic[type]));

      // player on top
      if (type === 1) {
        addSelector.css('z-index', '999');
      }
    }
    
    //console.timeEnd('ui.renderChanges');
  };


};

