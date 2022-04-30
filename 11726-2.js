const fs = require("fs");
let input = fs.readFileSync("./dev/stdin.txt").toString().trim().split(" ");

const num = parseInt(input[0]);

let answerArr = [0, 1, 2];

if (num > 2) {
  for (let i = 3; i <= num; i++) {
    answerArr[i] = (answerArr[i - 1] + answerArr[i - 2]) % 10007;
  }
}

console.log(answerArr[num]);
