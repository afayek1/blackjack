describe("Card", function() {
  var Card = require('../models/Card');
  var jackOfSpades;

  beforeEach(function() {
    jackOfSpades = new Card("J", "Spade");
  });

  it("has a suit", function() {
    expect(jackOfSpades.getSuit()).toBe("Spade");
  })

  it("has a value", function() {
    expect(jackOfSpades.getValue()).toBe(10);
  })

  it("has a number", function() {
    expect(jackOfSpades.getNumber()).toBe("J");
  })
})