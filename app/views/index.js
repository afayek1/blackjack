var View = function() {
  this.playersHand;
  this.dealersHand;
}

View.prototype.getHitButton = function() {
    return document.getElementById("hit");
};

View.prototype.getStayButton = function() {
    return document.getElementById("stay");
};

View.prototype.getPlayAgainButton = function(status) {
  return document.getElementById("play-again");
};

View.prototype.getPlayersHand = function() {
  return document.getElementById("players-hand");
};

View.prototype.getDealersHand = function() {
  return document.getElementById("dealers-hand");
};

View.prototype.getPlayersScore = function() {
  return document.getElementById("players-score");
};

View.prototype.getDealersScore = function() {
  return document.getElementById("dealers-score");
};

View.prototype.getButtonContainer = function(first_argument) {
  return document.getElementById("buttons");
};

View.prototype.getStatus = function () {
  return document.getElementById("status");
}

View.prototype.updateStatus = function(status) {
  this.getStatus().innerHTML = status;
};

View.prototype.clearStatus = function(status) {
  this.getStatus().innerHTML = "";
};

View.prototype.updateScore = function(person, score) {
    if (person==="human") {
      this.getPlayersScore().innerHTML = "Score: " + score;
    } else {
      this.getDealersScore().innerHTML = "Score: " + score;
    }
};

View.prototype.showPlayAgainButton = function() {
  this.getPlayAgainButton().style.display = "inline";
};

View.prototype.hidePlayAgainButton = function() {
  this.getPlayAgainButton().style.display = "none";
};

View.prototype.dealerBusts = function() {
  return "Dealer busts! You WIN!!!";
};

View.prototype.humanBusts = function() {
  return "Sorry, you busted! Dealer wins :(";
};

View.prototype.dealerWins = function() {
  return "O no, dealer wins :(";
};

View.prototype.humanWins = function() {
  return "Yippeeeeee! You WIN!!!"
};

View.prototype.tie = function() {
  return "Wowzers! It's a TIE!!";
};


View.prototype.clearTable = function () {
  // Get the <ul> element with id="myList"
  var list = this.getDealersHand();
  // As long as <ul> has a child node, remove it
  while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
  }
  // Get the <ul> element with id="myList"
  var list = this.getPlayersHand();
  // As long as <ul> has a child node, remove it
  while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
  }
}

View.prototype.addCard = function(person, number, suit) {
  if (person==="human") {
    var img = document.createElement("img");
    img.src = "lib/images/SVG-cards-1.3/" + number + "_of_" + suit + ".svg";
    var li = document.createElement("li");
    this.getPlayersHand().appendChild(li).appendChild(img);
  }

  if (person==="dealer") {
    var img = document.createElement("img");
    img.src = "lib/images/SVG-cards-1.3/" + number + "_of_" + suit + ".svg";
    var li = document.createElement("li");
    this.getDealersHand().appendChild(li).appendChild(img);
  }
};