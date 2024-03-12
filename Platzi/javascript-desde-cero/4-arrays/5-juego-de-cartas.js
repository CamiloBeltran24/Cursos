// const deck =  ["♠", "♥", "♦", "♣"];
const deck = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Fisher-Yates Algorithm 
// usado para crear barajas de cartas
function shuffleDeck () {
  // for de atras hacia adelante
  for( let i = deck.length - 1; i > 0; i-- ) {
    const j = Math.floor( Math.random() * ( i + 1 ) );
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}


function dealCards( numCard ){
  const dealCards = deck.splice(0, numCard);
  return dealCards;
}

shuffleDeck()

const player1Hand = dealCards(3);
const player2Hand = dealCards(3);
const player3Hand = dealCards(3);


console.log(player1Hand);
console.log(player2Hand);
console.log(player3Hand);