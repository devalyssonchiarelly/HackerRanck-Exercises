// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// Dada uma matriz quadrada, calcular a diferença absoluta entre as somas das suas diagonais.

const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

function diagonalDifference(arr) {
  let result = 0;
  let size = arr.length;

  for (let i = 0; i < size; i++) {
    result += arr[i][i] - arr[i][size - (i + 1)];
  }

  console.log(Math.abs(result));
}

diagonalDifference(matrix);