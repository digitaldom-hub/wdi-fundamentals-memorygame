console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}



function flipCard(cardId) {
	
var cardOne;

cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

var cardTwo;

cardTwo = cards[2];

cardsInPlay.push(cardTwo);

checkForMatch();


 console.log("User flipped" + cards[cardId]);
 
 cardsInPlay.push(cards[cardId]);
 
 

}

flipCard(0);

flipCard(2);
		