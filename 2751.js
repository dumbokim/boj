const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().trim().split("\n");

const n = Number(input.shift());

// for (let i = 0; i < input.length; i++) {
//   for (let j = 0; j < input.length - 1; j++) {
//     if (input[j] > input[j + 1]) {
//       const temp = input[j];
//       input[j] = input[j + 1];
//       input[j + 1] = temp;
//     }
//   }
// }

input.sort((a, b) => a - b);

console.log(input.join("\n"));
