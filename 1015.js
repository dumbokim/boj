const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().split("\n");

const first = Number(input.shift());

const A = input[0].split(" ");

let newArr = [];

for (let i = 0; i < first; i++) {
  const num = Number(A[i]);
  if (newArr[num] == undefined) {
    newArr[num] = [i];
  } else {
    newArr[num].push(i);
  }
}

let P = [];
let nums = 0;
for (let i = 1; i <= newArr.length; i++) {
  if (newArr[i] != undefined) {
    for (let j = 0; j < newArr[i].length; j++) {
      P[newArr[i][j]] = nums;
      nums++;
    }
  }
}

let answer = P.join(" ");

console.log(answer);

// for (let i = 0; i < first; i++) {
//   console.log(P[i]);
// }
