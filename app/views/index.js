var View = function() {
  this.playersHand;
  this.dealersHand;
}

View.prototype.getStayButton = function() {
    return document.getElementById("stay");
};

View.prototype.getHitButton = function() {
    return document.getElementById("hit");
};

View.prototype.getPlayersHand = function() {
};

View.prototype.getDealersHand = function() {
};

View.prototype.addCard = function(person, card) {
};