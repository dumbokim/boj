const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().split("\n");

const len = Number(input.shift());

let answerArr = [];

for (let i = 0; i < len; i++) {
  const num = Number(input[i]);
  if (num == 0) {
    answerArr.pop();
  } else {
    answerArr.push(num);
  }
}

let answer = 0;

for (let i = 0; i < answerArr.length; i++) {
  answer += answerArr[i];
}

console.log(answer);
