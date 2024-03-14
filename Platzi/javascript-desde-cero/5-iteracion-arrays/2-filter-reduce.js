const numbers = [2, 20,15,8,97,25,63,39,48,17,49,43,19,67,61,11,53,29, 10, 52,40, 11, 25 ];
const evenNumbers = numbers.filter( number => number % 2 == 0 ); // Retorna un nuevo arreglo con los numeros que cumplan con la condicion

console.log( numbers );
console.log( evenNumbers );

// REDUCE

const numbersReduce = [1,2,3,4,5];
const sum = numbersReduce.reduce( ( accumulator, currentValue ) => accumulator + currentValue, 0);
console.log( numbersReduce );
console.log( sum );



// REDUCE   :  CASE 2
const words = ['Apple', 'Samsung', 'Huawei', 'Motorola', 'Xiaomi', 'Oppo', 'Apple', 'Renno','Oppo'];
const wordFrecuency = words.reduce( ( accumulator, currentValue ) => {
  if( accumulator[currentValue] ) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }

  return accumulator
}, {});

console.log( wordFrecuency );