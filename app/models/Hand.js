var Card = require('./Card')
var Deck = require('./Deck')


function Hand() {
  this.cards = [];

  this.getScore = function() {
    var score = 0;
    var aces = 0;

    for (var card = this.cards.length - 1; card >= 0; card--) {
      var cardValue = this.cards[card].getValue()
      score += cardValue;
      if (cardValue === 11) {
        aces += 1;
      }
    };

    while (score > 21 && aces > 0) {
      score -= 10;
      aces -= 0;
    }

    return score;
  };

  this.clearHand = function() {
    this.cards = [];
  };

  this.addCard = function(card) {
    this.cards.push(card);
  }
}

module.exports = Hand;
