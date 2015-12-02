var View = require('../views/index')

function Controller(){
  this.view = new View();
};

Controller.prototype.getView = function(){
  return this.view;
}

Controller.prototype.initialize = function() {
  this.getView().getHitButton().onclick = hit;
};

function hit() {
  console.log("hey")
}
