var gameObj = function(board, startingPos) {
  this.alive = true;
  this.pos = startingPos;
  this.type = 2;
  this.score = 0;
  this.won = false;
  this.go = function(direction){
    board.go(this, direction);
    return true;
  };

  this.updateScore = function(num) {
    this.score += num;
    $('#score-number').text(this.score);
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
    // make player invincible
    this.die = function(){};
    $('#ded').text("YOU WON BROOO!!!1").css('text-align', 'center');
    // setTimeout(location.reload, 2500);
    $('#refresh').text("Play again!").css('display', 'inline-block').on('click', function() {
      location.reload();
    });
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