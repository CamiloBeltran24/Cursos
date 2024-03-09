let countries = ['USA', 'Canada', 'UK'];
const newCountries = countries.push('Germany', 'Australia');

console.log( countries );
console.log( newCountries );


// POP

const removedCountry = countries.pop();

console.log( countries );
console.log( removedCountry );


// EJERCICIO

let bookCart = [];
const ADD_TO_CART_ACTION = 'addToCart';
const DELETE_TO_CART_ACTION = 'removeFromCart';
const VIEW_CART_ACTION = 'viewCart';

function performCartActions ( action, newBook ) {
  switch( action ) {
    case ADD_TO_CART_ACTION:
      bookCart.push( newBook );
      break;
    
    case DELETE_TO_CART_ACTION:
      if( bookCart.length === 0 ) {
        console.log('Cart is empty, No books to remove');
      } else {
        const removedBook =  bookCart.pop();
        console.log(`remove book from the cart ${removedBook}`);
      }
      break;

    case VIEW_CART_ACTION:
      console.log( 'Current Cart Of Books: ', bookCart );
      break;

    default:
      break;
  }
}