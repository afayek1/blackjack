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

  it("adds a card", function() {
    hand.addCard(jackOfSpades);
    expect(hand.cards).toContain(jackOfSpades)
  });

  it("scores your hand", function() {
    hand.addCard(jackOfSpades);
    hand.addCard(queenOfHearts);
    expect(hand.getScore()).toBe(20);
  });

  it("should change the value of an Ace from 11 to 1 if you go over 21", function() {
    hand.addCard(jackOfSpades);
    hand.addCard(queenOfHearts);
    hand.addCard(aceOfClubs);
    expect(hand.getScore()).toBe(21);
  });

  it("clears your hand", function() {
    hand.addCard(jackOfSpades);
    hand.addCard(queenOfHearts);
    hand.clearHand();
    expect(hand.cards).toEqual([]);
  })
})