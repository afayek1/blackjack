function Hand(player) {
  this.person = player
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

    while (aces > 0) {
      if (score>21) {
        score-=10;
      }
    };

    return score;
  };

  this.clearHand = function() {
    this.cards = [];
  };

  this.addCard = function(card) {
    this.cards.push(card);
  };

  this.getPlayerType = function () {
    return this.person;
  }
}