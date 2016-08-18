var gameObj = function(board, startingPos) {
  this.alive = true;
  this.pos = startingPos;
  this.type = 2;
  this.lvl = 1;
  this.score = 0;
  this.won = false;
  this.go = function(direction){
    board.go(this, direction);
    return true;
  };

  this.updateScore = function(num) {
    score += num;
    $('#score-number').text(score);
  };

  this.die = function() {
    this.alive = false;
    //console.log(this.alive);
    board.delObj(this);
    $('#ded').text("You have reached\nYour final destination.").css('text-align', 'center');
    // setTimeout(location.reload, 2500);
    $('#refresh').css('display', 'inline-block').on('click', function() {
      location.reload();
    });
    board.isActive = false;
    stopAll(intervals);
  };

  this.win = function() {
    // make player invincible without causing errors
    // if die() is called
    this.die = function(){};
    // setTimeout(location.reload, 2500);

    if (this.lvl == 1) {
      $('#refresh').text("Go to level 2!").css('display', 'inline-block').on('click', function() {
        cleanBoard(board); flushBoard(); renderBoard2();

      $('#ded').text("You won level 1").css('text-align', 'center');
      });
    } else {
      $('#refresh').text("Play again").css('display', 'inline-block').on('click', function() {
        location.reload();
      });
      $('#ded').text("You won!").css('text-align', 'center');
    }
    if(!this.won) {
      this.updateScore(10000);
    }
    this.won = true;
    board.isActive = false;
    stopAll(intervals);
  }
};

 var newWall = function(board, pos, width, height, type) {
    // coor: {x: ..., y: ...}
    // default
    if (typeof type === 'undefined') {
      type = 3;
    }

    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        var tempPos = {y: pos.y + i, x: pos.x + j}
        var tempObj = new gameObj(board, tempPos);
        tempObj.type = type;
        board.addObj(tempObj);
      }
    }
  }

// var Projectile = function(board, startingPos, direction, speed) {
//   this.type = 3;
//   this.speed = speed;
//   this.pos = startingPos;
//   this.direction = direction;
//   this.go = function(direction){
//     board.go(this, direction);
//     return true;
//   };
//   this.onCollision = function(obj) {
//     board.delObj(this);
//   }

//   var that = this;
//   this.autoAct = function() {
//     setInterval(function() {
//       //console.log(that);
//       that.go(direction);
//     }, speed);
//   // this.autoAct();
// }
// }