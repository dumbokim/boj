const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().split("\n");
const len = Number(input[0]);
let A = input[1].split(" ");
let B = input[2].split(" ");

// for (let i = 0; i < len; i++) {
//   A[i] = Number(A[i]);
//   B[i] = Number(B[i]);
// }

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);
console.log(A);
console.log(B);

let S = 0;

for (let i = 0; i < len; i++) {
  S += A[i] * B[i];
}

console.log(S);
