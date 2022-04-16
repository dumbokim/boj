const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().trim().split("\n");
input.pop();

// let answerArr = [];

// for (let i = 0; i < input.length; i++) {
//   const num = input[i].split("");
//   for (let j = 0; j < Math.round(num.length / 2); j++) {
//     if (j == Math.floor(num.length / 2)) continue;
//     else {
//       if (num[j] != num[num.length - 1 - j]) {
//         answerArr.push("no");
//         break;
//       }
//     }
//   }
//   answerArr.length != i + 1 ? answerArr.push("yes") : "";
// }

// console.log(answerArr.join("\n"));

for (let i = 0; i < input.length; i++) {
  let reverseStr = input[i].split("").reverse().join("");
  console.log(input[i] === reverseStr ? "yes" : "no");
}
