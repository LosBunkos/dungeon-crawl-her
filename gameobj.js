var gameObj = function(board, pos) {
  // Properties
  this.pos = pos;
  this.type = 2;
  this.go = function(direction) {
    board.go(this.direction);
  }
  // Methods
  // this.autoAct = function() {};
  // this.init = function() {

  //   // Filling coordinates
  //   for (var i = 0; i < this.size.x; i++) {
  //     this.coors.x.push(this.location.x + i);
  //   }

  //   for (var i = 0; i < this.size.y; i++) {
  //     this.coors.y.push(this.location.y + i);
  //   }

  //   this.initialized = true;
  // }

  // this.addToBoard = function(board) {
  // }

  



}