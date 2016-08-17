var gameObj = function(board, startingPos) {
  this.alive = true;
  this.pos = startingPos;
  this.type = 2;
  this.go = function(direction){
    board.go(this, direction);
    return true;
  };
  this.die = function() {
    $('#ded').html("YO DED BRAH");
    initAll();
  };
  this.autoAct = function(){};
  this.onCollision = function(obj) {
    board.delObj(this);
  }
};

 var newWall = function(board, pos, width, height) {
    // coor: {x: ..., y: ...}
    this.pos = pos;
    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        var tempPos = {y: pos.y + i, x: pos.x + j}
        var tempObj = new gameObj(board, tempPos);
        tempObj.type = 3;
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
//       console.log(that);
//       that.go(direction);
//     }, speed);
//   // this.autoAct();
// }
// }