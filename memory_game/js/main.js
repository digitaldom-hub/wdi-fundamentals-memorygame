console.log("Up and running!");

var cards = [
{
 rank: 'queen',
 suit: 'hearts',
 cardImage: 'images/images/queen-of-hearts.png'
},
{
 rank: 'queen',
 suit: 'diamonds',
 cardImage: 'images/queen-of-diamonds.png'
},
{
 rank: 'king',
 suit: 'hearts',
 cardImage: 'images/king-of-hearts.png'
},
{
 rank: 'king',
 suit: 'diamonds',
 cardImage: 'images/king-of-diamonds.png'
}
]

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


 console.log("User flipped " + cards[cardId].rank);
 console.log("User flipped " + cards[cardId].suit);
 console.log("User flipped " + cards[cardId].cardImage);
 cardsInPlay.push(cards[cardId].rank);
 
 

}

flipCard(0);

flipCard(2);
		