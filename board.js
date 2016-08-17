var Board = function(width, ui, height) {

  if (typeof height === 'undefined') {
    this.height = width;
  } else {
    this.height = height;
  }
  // Properties
  this.width = width;
  this.ui = ui; // tests for undefined are in the methods
  this.board = [];
  this.gameObjs = [];
  this.initialized = false;
  this.currID = 0;

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
  };

  this.addObj = function(obj) {
    this.gameObjs.push(obj);
    console.info('Notice: Added', obj, 'to gameObjs (addObj)');
    // assign an id to the obj
    obj.id = this.currID++;
    // add obj to board array
    this.board[obj.pos.y][obj.pos.x] = obj.type;
    // update ui
    //
    console.log(this);
    this.ui.renderChanges(obj.pos, obj.type);
  };

  this.findObjByID = function(obj) {
    for (var i = 0; i < this.gameObjs.length; i++) {
      if (obj.id === this.gameObjs[i].id) {
        return i;
      }
    }
    return -1;
  }
  this.addAllObjsToBoard = function() {
    this.gameObjs.forEach(function(obj) {
      // Render all gameObjects to board arr
      this.board.board[obj.pos.y][obj.pos.x] = obj.type;
    });
  };

  this.delObj = function(obj) {
    console.info('>Notice: removing gameObj', obj);
    var idx = this.findObjByID(obj);
    this.board[obj.pos.y][obj.pos.x] = 0;
    this.ui.renderChanges({x: obj.pos.x, y: obj.pos.y}, 0);
    this.gameObjs.splice(idx, 1);
  }

  // collision handling
  this.collide = function(obj1, obj2) {
    // key:
    // 1 = player
    // 2 = monster
    // 3 = wall
    // 4 = door
    // 5 = gold (score)

    if (obj1.type === 1 && obj2.type === 2) {
      obj1.die();
    } else if (obj1.type === 2 && obj2.type === 1) {
      obj2.die();
    } else if (obj1.type === 1 && obj2.type === 4) {
      obj1.win();
    } else if (obj1.type === 1 && obj2.type === 5) {
      obj1.getScore(100);
    } else {
      return true;
    }
    return false;
  }


  // Init board, with [(0,0) (default) OR (x,y)] = 1
  // Fills the arrays with 0s except for {x,y} which is filled with a 1.
  // By default, x = 0 & y = 0
  this.init = function(x, y) {
    console.time('board.init');
    this.initialized = true;
    if(typeof x === 'undefined' || typeof y === 'undefined') {
      x = 0;
      y = 0;
    }
    // Neat console handling
    console.group('init');
    console.info('Notice: Board initialized');
    console.info('Head at {' + x + ',' + y + '}.');
    console.info('Size:', width, 'x', height, '(' + (height * width) + ' divs)\n');
    console.groupEnd('init');
    console.log(''); // spacing

    // Clean board first
    this.board = [];
    this.gameObjs = [];

    this.board = this._generate();
    if(typeof this.ui !== 'undefined') {
      this.ui.initBoard();
    }
    console.timeEnd('board.init');
  };

  // @amount{OPTIONAL}: default 1.
  this.go = function(obj, direction, amount) {
    if(!this.initialized) {
      console.error('Error: Board not initialized!');
      return false;
    }
    if(typeof amount === 'undefined') {
      amount = 1;
    }
    var directions = {
      'up'   : {x: 0, y: -1 * amount},
      'down' : {x: 0, y:  1 * amount},
      'left' : {x: -1 * amount, y: 0},
      'right': {x:  1 * amount, y: 0}
    };

    if(typeof directions[direction] === 'undefined') {
      console.error("Error: Can't go " + direction + '. (go)');
      return false;
    } else {
      if (obj.id === 'undefined') {
        console.error(obj);
        console.error("object id undefined (go)");
      }
      // Notice: we're giving _safelyGo() the *id*.
      if(this._safelyGo(obj, directions[direction])) {
        if(typeof this.ui !== 'undefined') {
          this.ui.renderChanges(obj.pos, obj.type, obj.prevPos);
        }
        console.info('Notice: Went ' + direction + '. (go)');
        return true;
      }
    }
  };

  this._safelyGo = function(obj, delta) {
    // obj is the gameObjects to move
    var idx = this.findObjByID(obj);
    var err = false;

    var currPos = {x: obj.pos.x,
      y: obj.pos.y};

    var newPos =  {x: currPos.x + delta.x,
      y: currPos.y + delta.y};

    var maxPos = {x: this.width - 1,
      y: this.height - 1};


    // Check for array overflows
    // x overflows
    if(newPos.x > maxPos.x || newPos.x < 0) {
      console.warn('Warning:', obj.id, ': X overflow (safelyGo)');
      err = true;
    }
    // y overflows
    if(newPos.y > maxPos.y || newPos.y < 0) {
      console.warn('Warning:', obj.id, ': Y overflow (safelyGo)');
      err = true;
    }

    // filter gameObjs by position - 
    // fills 'collisions' array with objects that 
    // have the same position as where we're trying to go
    // we should NEVER have collisions.length > 1
    var collisions = this.gameObjs.filter(function(obj) {
      return (newPos.y === obj.pos.y) &&
             (newPos.x === obj.pos.x);
    });
    // if we found collisions
    if (collisions.length != 0) {
      console.warn("Warning:", obj.id, "would collide with", collisions[0].id);
      // this.collide(collisions[0], obj);
      err = this.collide(obj, collisions[0]);
    }

    // half-assed death implementation
    if (!obj.alive) {
      console.warn("Warning: Can't move - u ded")
      err = true;
    }

    // if everything ok, proceed with moving the obj.
    if(!err) {
      console.info('Notice:', obj.id, ': went success. new coordinates: ' + 
                   newPos.x + ',' + newPos.y +
          '} (_safelyGo)');
      // update board 'state'
      obj.prevPos = currPos;
      obj.pos = newPos; 
      this.board[obj.prevPos.y][obj.prevPos.x] = 0;
      this.board[obj.pos.y][obj.pos.x] = obj.type;
    }

    return !err;
  };

};