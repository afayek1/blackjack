describe("Deck", function() {
  var Card = require('../models/Card')
  var Deck = require('../models/Deck')
  var deck;

  beforeEach(function() {
    deck = new Deck();
  });

  it("should have 52 cards", function() {
    expect(deck.cards.length).toBe(52);
  })
})