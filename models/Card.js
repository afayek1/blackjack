function Card(number, suit) {
  var number = number;
  var suit = suit;

  this.getNumber = function() {
    return number;
  };

  this.getSuit = function() {
    return suit;
  };

  this.getValue = function() {
    if (number === "J" || number === "Q" || number === "K") {
      return 10;
    } else if (number === "A") {
      return 11;
    } else {
      return parseInt(number);
    }
  };
}

module.exports = Card;