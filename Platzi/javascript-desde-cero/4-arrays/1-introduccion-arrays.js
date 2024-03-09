// How to create an array

// 1. new Array() or Array()

const fruits = Array("apple", "banana", "orange");
console.log( fruits );

const justOneNumber = Array(12);
console.log( justOneNumber );

const numbers = Array(1,2,3,4,5);
console.log( numbers );

// 2. Array literal syntax

const oneNumber = [4];
console.log( oneNumber );

const emptyArray = [];
console.log( emptyArray );

const sports = ["soccer", "tennis", "baseball", "rugby"];
console.log( sports );

//Arreglo mixto
const recipeIngredients = [
  'Flour',
  true,
  2,
  {
    ingredient: 'milk', quantity: '1 cup'
  },
  false
]


// Accessing Array Elements
const firstFruit = fruits[0]; // apple
console.log(firstFruit);

//length property
const numberOfFruits = fruits.length;
console.log( numberOfFruits );

// Mutability
fruits.push('watermelon');
console.log( fruits );

// Inmutability
const newFruits = fruits.concat(['Grape', 'Kiwi']);
console.log( fruits );
console.log( newFruits );

// Checking arrays with Array.isArray()

const isArray = Array.isArray( fruits );
console.log( isArray );