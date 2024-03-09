const colors = ['Yellow', 'Blue', 'Red'];
const removedColors = colors.shift();

console.log( colors );
console.log( removedColors );

const newColors = colors.unshift( 'Pink', 'Purple' );

console.log( colors );
console.log( newColors );


// EJERCICIO
let playlist = ['snuff' ,'hope' ,'creep' ,'beautifull scars'];

function managePlayList ( playlist, newSong ) {
  playlist.shift();
  playlist.unshift( newSong );
  return playlist;
}


console.log( playlist );
const updatedPlayList = managePlayList( playlist, 'Californication');
console.log( updatedPlayList );
