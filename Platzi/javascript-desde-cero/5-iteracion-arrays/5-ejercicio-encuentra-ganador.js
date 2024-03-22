// EJERCICIO

/**
 * In this program, you can verify if a person is among the list of winner in a raffle
 * Simply input the name or ticket number, and the program will check and display the winner's information.
 */

const WINNERS = [
  {
    name:'Christian',
    ticket: 2493,
  },
  {
    name:'Johana',
    ticket: 2101,
  },
  {
    name:'Pepe',
    ticket: 2005,
  },
  {
    name:'Lucrancio',
    ticket: 7001,
  },
  {
    name:'Tintin',
    ticket: 1008,
  },
];

// const ticket = Math.floor( Math.random() * 9999 );
const ticket = 7001;

// const winner = WINNERS.find( ( person ) => {
//   if( person.ticket === ticket ) {
//     return person;
//   } else {
//     return 'No es numero ganador'
//   }
// })

const winner = WINNERS.find( person => person.ticket === ticket);

if( winner ) {
  console.log('====================================');
  console.log(`GANADOR: ${winner.name}`);
  console.log(`TICKET: ${ticket}`);
  console.log('====================================');
} else {
  console.log(`Ticket: ${ticket}`);
  console.log('NO ES NUMERO GANADOR');
}


const winningParticipants = [
  { id: 1, name: 'Jennifer', ticketNumber: 1501},
  { id: 8, name: 'Camilo', ticketNumber: 1001},
  { id: 10, name: 'Ferdinand', ticketNumber: 2511},
  { id: 7, name: 'Fineas', ticketNumber: 8056},

]

function findWinnerByName( name ) {
  const winner = winningParticipants.find( participant => participant.name === name );
  return winner || 'No winner found with that name.';
}

function findIndexWinnerByTicket( ticketNumber ) {
  const index = winningParticipants.findIndex( participant => participant.ticketNumber === ticketNumber );
  return index !== -1 ? index : 'No winner found with that ticket number';
}

function diplayWinnerInformation( winner ) {
  if( winner !== undefined && winner !== null && winner !== 'No winner found with that name.' ) {
    console.log('Winner information: ', winner);
  } else {
    console.log('No winner found.');
  }
}

const winnerByName = findWinnerByName('Camilo');
const indexWinnerByTicket = findIndexWinnerByTicket( 8056 );
console.log('Index of winner by Ticket Number: ', indexWinnerByTicket);
diplayWinnerInformation( winningParticipants[indexWinnerByTicket] )