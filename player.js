var Player = function(name, hp) {
  this.name = name || 'JEW';
  this.location = {x: 0, y: 0};
  this.maxHP = hp || 10;
  this.HP = this.maxHP;

}