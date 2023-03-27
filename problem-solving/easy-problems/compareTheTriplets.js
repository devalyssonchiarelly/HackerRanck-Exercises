/*
   Given a and b, termine their respective comparison point.
   a = [5, 6, 7]
   b = [3, 6, 10]
   Expected Output = [1, 1]
  ----------------------------------------------------------
  a = [17, 28, 30]
  b = [99, 16, 8]
  Expected Output = [2, 1]
*/

const alice = [17, 28, 30];
const bob = [99, 16, 8];

function compareTriplets (a, b) {
  let aliceScore = 0;
  let bobScore = 0;

  for (let i in a) {
    if (a[i] > b[i]) aliceScore += 1;
    if (a[i] < b[i]) bobScore += 1;
  }
  return [aliceScore, bobScore];
}

console.log(compareTriplets(alice, bob))