const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().split("\n");

const len = Number(input.shift());

let newArr = [];
let answerArr = [];

for (let i = 0; i < len; i++) {
  switch (input[i]) {
    case "top":
      if (newArr.length == 0) {
        answerArr.push(-1);
      } else {
        answerArr.push(newArr[newArr.length - 1]);
      }
      break;
    case "pop":
      if (newArr.length == 0) {
        answerArr.push(-1);
      } else {
        answerArr.push(newArr.pop());
      }
      break;
    case "size":
      answerArr.push(newArr.length);
      break;
    case "empty":
      if (newArr.length == 0) {
        answerArr.push(1);
      } else {
        answerArr.push(0);
      }
      break;
    default:
      const line = input[i].split(" ");
      newArr.push(Number(line[1]));
      break;
  }
}

console.log(answerArr.join("\n"));
