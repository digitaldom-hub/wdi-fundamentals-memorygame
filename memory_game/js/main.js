console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

var cardOne;

cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

var cardTwo;

cardTwo = cards[2];

cardsInPlay.push(cardTwo);


if (cardsInPlay.length === 2){
	if ( cardsInPlay[0] === cardsInPlay[1] ){
		alert("You found a match");
	}
	else if ( cardsInPlay[0] != cardsInPlay[1] ){
		alert("Sorry, try again");
	}
}


		