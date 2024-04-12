let array1D = [ 1, 2, 3 ];
let array2D = [ [1,2,3], [4,5,6], [7,8,9] ];

let matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
];

//arreglo[fila][columna]
matrix[1][2] = 10;
console.log( matrix );

let value = matrix[0][1];
console.log( value );


// OPERACIONES COMUNES CON ARREGLOS MULTIDIMENSIONALES

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    const element = matrix[i][j];
  }
}

function findElement(matrix, element){
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === element ){
        return true;
      }
    }
  }
};

findElement(matrix, 5);

// duplicar una matriz

function duplicateMAtrix(matrix){
  let newMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = [...matrix[i]]
  }

  return newMatrix;
}


console.log( duplicateMAtrix(matrix) );