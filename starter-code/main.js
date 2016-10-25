console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// if (cardOne === cardTwo) {
// 	alert('You found a match!');
// }
// else if (cardThree === cardFour) {
// 	alert('You found a match!');
// }
// else {
// 	alert ('Sorry, try again!')
// }


//Finds the #board div
var gameBoard = document.getElementById('#game-board');


//Creates cards
var createCards = function () {
	for (var i = 0; i < 4; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		document.getElementsByClassName('board')[0].appendChild(newCard);
	}
}

createCards();