const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().split("\n");
const input1 = Number(input.shift());

let P = input[0].split(" ");

P.sort((a, b) => Number(a) - Number(b));

let time = 0;
let answer = 0;

for (let i = 0; i < input1; i++) {
  time += Number(P[i]);
  answer += time;
}

console.log(answer);
