const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().trim().split(" ");

const n = Number(input[0]);
const k = Number(input[1]);

let answerArr = [];

let newArr = [];
for (let i = 0; i < n; i++) {
  newArr.push(i + 1);
}

let index = k - 1;

while (answerArr.length < n) {
  if (index >= newArr.length) {
    while (index >= newArr.length) {
      index = index - newArr.length;
    }
  }

  let a = newArr.splice(index, 1);
  answerArr.push(a[0]);

  index += k - 1;
}

console.log("<" + answerArr.join(", ") + ">");
