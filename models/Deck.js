var Card = require('./Card')


var Deck = function() {
  this.numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  this.suits = ['Hearts','Diamonds','Spades','Clubs'];
  this.cards = [];
  this.createDeck();
}

Deck.prototype.createDeck = function() {
    for (var suit in this.suits) {
        for (var number in this.numbers) {
            this.cards.push(new Card(this.numbers[number], this.suits[suit]));
        }
    }
}

Deck.prototype.shuffle = function() {
    var currentIndex = this.cards.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }

    return this.cards;
}

Deck.prototype.deal = function() {
  return this.cards.pop();
};

module.exports = Deck;