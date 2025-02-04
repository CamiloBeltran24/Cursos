// How to create an Array ?

// 1. new Array() or Array()


const fruits = Array('Apple', 'Banana', 'Orange');
console.log( fruits );

const justOneNumber = Array( 12 );
console.log( justOneNumber );

const number = Array(12, 1, 20, 44, 14, 8, 124, 420);
console.log( number );


// 2. Array Literal syntax

const oneNumber = [4];
console.log( oneNumber );

const emptyArray = [];
console.log( emptyArray );

const sports = ['soccer', 'tennis', 'rugby'];
console.log( sports );

const recipeIngredients = [
    'Flour',
    true,
    123,
    {
        ingredient:'Milk',
        quantity: '1 cup',
    },
    false
];

console.log(recipeIngredients);

// Accessing array elements

const firstFruit = fruits[0];
console.log( firstFruit );

// length property

const numberOfFruits = fruits.length
console.log(numberOfFruits);


// MUTABILITY

fruits.push('Watermelon'); // Agregamos un nuevo valor al arreglo, es decir que el arreglo cambio o muto !
console.log(fruits);

// IMMUTABILITY

const newFruits = fruits.concat(['grape','kiwi']);
console.log( fruits );
console.log( newFruits );


// Checking arrays with Array.isArray()

const isArray = Array.isArray( fruits );
console.log(isArray);

// Practical Exercise: Sum all the array elements

const numbersArray = [1,2,3,4,5,6,7,8,9,0];
let sum = 0;

for (let index = 0; index < numbersArray.length; index++) {
    sum += numbersArray[index];
}

console.log(sum);








