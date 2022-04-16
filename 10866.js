const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().split("\n");

const len = Number(input.shift());

let deqArr = [];
let answerArr = [];

for (let i = 0; i < len; i++) {
  switch (input[i]) {
    case "pop_front":
      if (deqArr.length == 0) {
        answerArr.push(-1);
      } else {
        answerArr.push(deqArr.shift());
      }
      break;
    case "pop_back":
      if (deqArr.length == 0) {
        answerArr.push(-1);
      } else {
        answerArr.push(deqArr.pop());
      }
      break;
    case "front":
      if (deqArr.length == 0) {
        answerArr.push(-1);
      } else {
        answerArr.push(deqArr[0]);
      }
      break;
    case "back":
      if (deqArr.length == 0) {
        answerArr.push(-1);
      } else {
        answerArr.push(deqArr[deqArr.length - 1]);
      }
      break;
    case "size":
      answerArr.push(deqArr.length);
      break;
    case "empty":
      if (deqArr.length == 0) {
        answerArr.push(1);
      } else {
        answerArr.push(0);
      }
      break;
    default:
      const line = input[i].split(" ");
      if (line[0] == "push_front") {
        deqArr.unshift(Number(line[1]));
      } else {
        deqArr.push(Number(line[1]));
      }
      break;
  }
}

console.log(answerArr.join("\n"));
