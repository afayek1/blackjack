var Card = require('models/Card')
var Deck = require('models/Deck')
var Hand = require('models/Hand')

var BlackJack = function() {
  var deck;
  var dealerHand;
  var playerHand;

  this.play = function() {
    this.setUp();
  }

  this.setup = function() {
    deck = new Deck();
    dealerHand = new Hand();
    playerHand = new Hand();
  }
}