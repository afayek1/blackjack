var View = function() {
  this.playersHand;
  this.dealersHand;
}


// DOM SELECTORS
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
};



// TABLE VIEW FX
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

View.prototype.clearTable = function () {
  this.getPlayersHand().innerHTML="";
  this.getDealersHand().innerHTML="";
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


// PROMPT TEXTS
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


