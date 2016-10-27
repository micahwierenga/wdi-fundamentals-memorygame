
// //Mine
var cards = ['queen', 'queen', 'king', 'king'];

// //Mine
var cardsInPlay = [];

// //Amended this line as a result of consulting Solutions
var board = document.getElementById('game-board');

// //Mine, though I added lines 14, 15, 18, and 19 from Solutions (as well as amended line 17)
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		board.appendChild(cardElement);
		board.appendChild(cardElement);
	}
}

// //Mine, though I needed to add lines 26-31 as a result of consulting Solutions
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>";
	} else {
		this.innerHTML = "<img src='queen.png'>";		
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

// //Mine, though, I needed to amend line 40 and remove lines 43-45
function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	}
	// else if (cardThree === cardFour) {
	// 	alert('You found a match!');
	// }
	else {
		alert ("Sorry, try again!")
	}
}

createBoard();



// //Finds the #board div
// // var gameBoard = document.getElementById('#game-board');


// // //Creates cards
// // var createCards = function () {
// // 	for (var i = 0; i < 4; i++) {
// // 		var newCard = document.createElement('div');
// // 		newCard.className = 'card';
// // 		document.getElementsByClassName('board')[0].appendChild(newCard);
// // 	}
// // }