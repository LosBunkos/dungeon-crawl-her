var gameObj = function(board, startingPos) {
  this.alive = true;
  this.pos = startingPos;
  this.type = 2;
  this.go = function(direction){
    board.go(this, direction);
    return true;
  };
  this.die = function(){};
  this.autoAct = function(){};
  this.onCollision = function(obj) {
    board.delObj(this);
  }
};

var Projectile = function(board, startingPos, direction, speed) {
  this.type = 3;
  this.speed = speed;
  this.pos = startingPos;
  this.direction = direction;
  this.go = function(direction){
    board.go(this, direction);
    return true;
  };
  this.onCollision = function(obj) {
    board.delObj(this);
    debugger;
  }

  var that = this;
  this.autoAct = function() {
    setInterval(function() {
      console.log(that);
      that.go(direction);
    }, speed);
  // this.autoAct();
}
}