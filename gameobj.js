var gameObj = function(type, size, location) {
  this.type = type || 1;
  this.size = size || {x:1,y:1};
  this.location = location || {x:0, y:0};
  this.coors = {x:[], y:[]};
  this.initialized = false;

  this.autoAct = function() {};
  this.init = function() {

    // Filled coordinates
    for (var i = 0; i < this.size.x; i++) {
      this.coors.x.push(this.location.x + i);
    }

    for (var i = 0; i < this.size.y; i++) {
      this.coors.y.push(this.location.y + i);
    }

    this.initialized = true;
  }



}