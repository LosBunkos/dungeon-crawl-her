var UI = function(board) {
  // TODO:
  // 1. Render Board
  // 2. Render Status
  // 3. render board changes efficiently
  // 4. better solution for divtemplate. 
  //    handlebars? maybe not
  // 5. do something with 'type' 
  // 
  // 
  // 
  // 
  // 

  // DEFAULTS GO HERE
  // Where all the divs go:
  this.$boardContainer = $('#board');
  this.playerColor = 'black';

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
    //  | this improves performance
    //  | because we only need to access
    //  v the DOM once.
    var tempBoard = '' 

    // make sure it's empty before rendering
    this.$boardContainer.empty();
    for (var i = 0; i < board.board.height; i++) {
      for (var j = 0; j < board.board.width; j++) {
        // type = 0, cuz we ain't got nothing yet
        tempBoard += divTemp(j, i, '0'); 
      }
    }
    $boardContainer.append(tempBoard);

    // Set the 'player div' and turn it to this.playerColor.
    // We can probably improve performance but only if we have to.
    $('[data-x="' + board.x + '"][data-y="' + board.y + '"]')
      .css('background-color', this.playerColor);

    // Make it so the container has a set size,
    // and we only change the 'resolution' aka num of divs
    $('.square').css('width',((100 / board.width) + '%'));
    $('.square').css('height',((100 / board.height) + '%'));


  }
}