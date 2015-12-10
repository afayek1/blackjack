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
    if (number === "Jack" || number === "Queen" || number === "King") {
      return 10;
    } else if (number === "Ace") {
      return 11;
    } else {
      return parseInt(number);
    }
  };
}