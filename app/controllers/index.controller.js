var Controller = function(view){
  var deck;
  var dealerHand;
  var humanHand;

  this.view = view;
  this.addEventListeners();
  this.setUpBlackJack();
  this.dealHands();
};

Controller.prototype.addEventListeners = function() {
  var that = this;
  this.getView().getHitButton().onclick = function() {that.dealCard(humanHand)};
  this.getView().getStayButton().onclick = function() {that.finishRound()};
  this.getView().getPlayAgainButton().onclick = function() {that.clearTable()};
};

// Instantiate objects
Controller.prototype.setUpBlackJack = function () {
  deck = new Deck();
  humanHand = new Hand("human");
  dealerHand = new Hand("dealer");
}

Controller.prototype.getView = function(){
  return this.view;
}

// Initial deal for each round
Controller.prototype.dealHands = function() {
  this.dealCard(humanHand);
  this.dealCard(humanHand);
  this.dealCard(dealerHand);
  this.dealCard(dealerHand);
};

Controller.prototype.dealCard = function(player) {
  var card;
  card = deck.deal();
  player.addCard(card);
  // add card to table
  this.getView().addCard(player.getPlayerType(), card.getNumber(), card.getSuit());
  // update score
  this.getView().updateScore(player.getPlayerType(), player.getScore());
  // Check if you bust
  if (player.getPlayerType() === "human" && this.isBust(player)) {
    this.playAgain(this.getView().humanBusted);
    this.clearTable();
  }
};

Controller.prototype.finishRound = function() {
  var playAgainInput;
  var winner;
  var playAgainText;
  var answer;

  // Dealer hits while score less than 17
  while (dealerHand.getScore() < 17) {
    this.dealCard(dealerHand);
  };

  // Check if dealer busts and prompt to play again
  if (this.isBust(dealerHand)) {
    winner = humanHand;
    this.getView().updateStatus(this.getView().dealerBusts());
  };

  this.checkForWinner();
  this.getView().showPlayAgainButton();
};

Controller.prototype.checkForWinner = function() {
  if (dealerHand.getScore() > humanHand.getScore()) {
    this.getView().updateStatus(this.getView().dealerWins());
  } else if (dealerHand.getScore() < humanHand.getScore()) {
    this.getView().updateStatus(this.getView().humanWins());
  } else {
    this.getView().updateStatus(this.getView().tie());
  };
};

Controller.prototype.isBust = function(player) {
  if (player.getScore() > 21) {
    return true;
  };
};

Controller.prototype.clearTable = function() {
  humanHand.clearHand();
  dealerHand.clearHand();
  this.getView().clearTable();
  this.getView().hidePlayAgainButton();
  this.getView().clearStatus();
  this.dealHands();
};