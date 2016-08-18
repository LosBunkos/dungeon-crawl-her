var UI = function(board) {
  this.board = board;

  // defaults
  this.$boardContainer = $('#board');
  this.playerImg = 'img/hero.gif';
  this.defaultImg = 'img/transparent.png';
  this.enemyImg = "img/enemy.gif";
  this.wallImg = 'img/transparent.png';
  this.goldImg = 'img/gold.png';
  this.backgroundImg = 'img/dungeon-crawler.gif';
  this.chestImg = '';
  
  this.typeDic = [this.defaultImg,
    this.playerImg, this.enemyImg,
    this.wallImg, this.defaultImg,
    this.goldImg, this.chestImg];

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
    console.log(this.backgroundImg);
  this.$boardContainer.css({'background-image' : 'url(' + this.backgroundImg + ')',
      'background-repeat': 'no-repeat'});

    var tempBoard = '' ;
    $('#board').html('');

    for (var i = 0; i < this.board.height; i++) {
      for (var j = 0; j < this.board.width; j++) {
        tempBoard += this.divTemp(j, i, board.board[i][j]);
      }
    }
    this.$boardContainer.html(tempBoard);

    $('[data-type=1]').html(this.imgize(this.playerImg))
      .css('z-index', '999');
      
    $('[data-type=2]').html(this.imgize(this.enemyImg));
    $('[data-type=5]').html(this.imgize(this.goldImg));


    $('.square').css('width',((100 / board.width) + '%'))
      .css('height',((100 / board.height) + '%'));

    //console.timeEnd('ui.initBoard');
  };

  this._selectCoor = function(x, y) {
    return  $('#y-' + y + '-x-' + x);
  };
  this.renderChanges = function(add, type, rem) {
    //console.time('ui.renderChanges');

    function removeImg(x,y) {
      // vanilla, for performance
      var toRem = document.getElementById('y-' + y + '-x-' + x);
      try {
        toRem.removeChild(toRem.firstChild);
      } catch(err) {
        console.log('caught', err);
      }
    }

    if(typeof rem !== 'undefined') {
      removeImg(rem.x, rem.y);
    }

    // instead of changing to transparent img, del html content
    if (type === 0) {
      removeImg(add.x, add.y);
      
    // if not changine to transparent, regular img changing.
    } else {
      var addSelector = this._selectCoor(add.x, add.y);
      addSelector.html(this.imgize(this.typeDic[type]));

      // player on top
      if (type === 1) {
        addSelector.css('z-index', '999');
      }
    }
    
    //console.timeEnd('ui.renderChanges');
  };


};

