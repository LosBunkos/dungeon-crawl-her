var Board = function(width, height) {
  if(typeof height === 'undefined') { // allows 'new Board(5)'
    var height = width;
  }

  // Properties
  this.width = width;
  this.height = height;
  this.board = [];
  this.x = 0;
  this.y = 0;
  this.prevX = 0;
  this.prevY = 0;

  // Methods
  this._generate = function() {
    var tempBoard = [];
    for (var i = 0; i < this.height; i++) {
      var tempRow = [];
      for (var j = 0; j < this.width; j++) {
        tempRow.push(0);
      }
      tempBoard.push(tempRow);
    }
    return tempBoard;
  }

  // Init board, with [(0,0) (default) OR (x,y)] = 1 
  // Fills the arrays with 0s except for {x,y} which is filled with a 1. 
  // By default, x = 0 & y = 0
  this.init = function(x, y) { 
    if(typeof x === 'undefined' || typeof y === 'undefined') {
      console.log('Notice: x: was ' + x + ' - now 0 (init())');
      console.log('Notice: y: was ' + y + ' - now 0 (init())');
      console.log('Notice: Board initialized.');
      var x = 0;
      var y = 0;
    }
    this.board = this._generate();
    this.board[y][x] = 1;
    this.x = x;
    this.y = y;
  }

  // @amount{OPTIONAL}: default 1.
  this.go = function(direction, amount) {
    if(typeof amount === 'undefined') {
      var amount = 1;
    }
    var directions = {
      'up'   : {x: 0, y: -1 * amount},
      'down' : {x: 0, y:  1 * amount},
      'left' : {x: -1 * amount, y: 0},
      'right': {x:  1 * amount, y: 0}
    }

    if(typeof directions[direction] === 'undefined') {
      console.log("Error: Can't go " + direction + '. (go())');
      return false;
    } else {
      if(this._safelyGo(directions[direction])) {
        console.log('Notice: Went ' + direction + '. (go())')
        return true;
      }
    }
  }

  this._safelyGo = function(obj) {
    // The following block is mainly here to make the code after it more readable.
    var currX = this.x;
    var currY = this.y;
    var dx = obj.x;
    var dy = obj.y;
    var newX = currX + dx;
    var newY = currY + dy;
    var maxX = this.width - 1; // Max defined array index ()
    var maxY = this.width - 1; // ^
    var err = false;

    // Check for array overflows
    // x overflows
    if(newX > maxX || newX < 0) {
      console.log('Error: X overflow (_safelyGo())');
      err = true;
    }
    // y overflows
    if(newY > maxY || newY < 0) {
      console.log('Error: Y overflow (_safelyGo())');
      err = true;
    }
    // if everything ok, proceed with moving the 1.
    if(!err) {
      console.log('Notice: went success. new coordinates: {'
        + newX + '; ' + newY +
      '} (_safelyGo())');
      // update board 'state'
      this.prevX = this.x;
      this.prevY = this.y;
      this.x = newX;
      this.y = newY;
      this.board[currY][currX] = 0;
      this.board[newY][newX] = 1;
    }
    
    return !err;
  }

}