var UI = function(board) {
  // TODO:
  // 0. DEPRECATE THIS AND MOVE TO 3.JS
  // 1. render board changes efficiently
  // 2. better solution for divtemplate. 
  //    handlebars? maybe not
  // 3. do something with 'type' in initBoard.
  // 4. When player moves, actually change previous div's
  //    style to actual previous style, not default.
  // 
  // 
  // 


  this.board = board;
  // DEFAULTS GO HERE
  // Where all the divs go:
  this.$boardContainer = $('#board');
  this.playerColor = 'black';
  this.defaultColor = 'white';

  this.divTemp = function(x, y, type) {
    // keep type to a short string for performance
    // maybe? readability > performance
    // as long as performance is acceptable
    return "<div data-x='" + x +
              "' data-y='" + y +
              "' data-type='" + type + 
              "'class='square'>" +
           "</div>";
  }


  this.initBoard = function() {
    console.time('ui.initBoard');
    //  | this improves performance
    //  | because we only need to access
    //  v the DOM once.
    var tempBoard = '' 

    // make sure it's empty before rendering
    this.$boardContainer.empty();
    for (var i = 0; i < this.board.height; i++) {
      for (var j = 0; j < this.board.width; j++) {
        // type = 0, cuz we ain't got nothing yet
        tempBoard += this.divTemp(j, i, board.board[i][j]); 
      }
    }
    this.$boardContainer.append(tempBoard);

    // Set the 'player div' and turn it to this.playerColor.
    // We can probably improve performance but only if we have to.
    // $('[data-x="' + this.board.x + 
    // '"][data-y="' + this.board.y + 
    // '"]').
    //   css('background-color', this.playerColor);
    $('[data-type=1]').css('background-color', 'black');
    $('[data-type=2]').css('background-color', 'red');


    // Make it so the container has a set size,
    // and we only change the 'resolution' aka num of divs
    var aspectRatio = board.width / board.height;
    // Hardcoded, to test
    $('#board').css('width', 600 * aspectRatio);
    // $('#board').css('height',600 / aspectRatio);
    $('.square').css('width',((100 / this.board.width) + '%'));
    $('.square').css('height',((100 / this.board.height) + '%'));

    console.timeEnd('ui.initBoard');
  }

  // Temporary Styling below
  this.renderBoardChanges = function() {
    console.time('ui.renderBoardChanges');
    var $current = $('[data-x="' + player.pos.x + 
                   '"][data-y="' + player.pos.y + 
                   '"]');
    var $previous = $('[data-x="' + player.prevPos.x + 
                    '"][data-y="' + player.prevPos.y + 
                    '"]');

    $current.css('background-color', this.playerColor);
    $previous.css('background-color', this.defaultColor);
    
    console.timeEnd('ui.renderBoardChanges');
  }


}