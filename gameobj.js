var gameObj = function(board, startingPos) {
  this.pos = startingPos;
  this.type = 2;
  this.go = function(direction){
    board.go(this, direction);
    return true;
  };





      // this.initialized = false;

      // Methods
      // this.autoAct = function() {};
      // this.init = function() {
      //
      //   // Filling coordinates
      //   for (var i = 0; i < this.size.x; i++) {
      //     this.coors.x.push(this.location.x + i);
      //   }
      //
      //   for (var i = 0; i < this.size.y; i++) {
      //     this.coors.y.push(this.location.y + i);
      //   }
      //
      //   this.initialized = true;
      // }

};