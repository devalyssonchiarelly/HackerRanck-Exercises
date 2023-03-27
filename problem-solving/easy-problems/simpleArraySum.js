// Given an array of integers, find the sum of its elements.
// Dada uma matriz de números inteiros, encontre a soma de seus elementos.

const arrayNumber = [10, 20, 15, 20];

function simpleArraySum(arr) {
  const total = arr.reduce((acc, arr) => acc + arr, 0);
  return total;
};

console.log(simpleArraySum(arrayNumber));