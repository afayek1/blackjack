describe("Hand", function() {
  var Card = require('../models/Card')
  var Deck = require('../models/Deck')
  var Hand = require('../models/Hand')
  var deck;
  var hand;

  beforeEach(function() {
    deck = new Deck();
    hand = new Hand();
    jackOfSpades = new Card("J", "Spade");
    queenOfHearts = new Card("Q", "Heart");
    aceOfClubs = new Card("A", "Club")
  });

  it("should score your hand", function() {
    hand.cards.push(jackOfSpades);
    hand.cards.push(queenOfHearts);
    expect(hand.getScore()).toBe(20);
  });

  it("should change the value of an Ace from 11 to 1 if you go over 21", function() {
    hand.cards.push(jackOfSpades);
    hand.cards.push(queenOfHearts);
    hand.cards.push(aceOfClubs);
    expect(hand.getScore()).toBe(21);
  });
})