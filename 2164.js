const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().trim().split("\n");

const n = Number(input[0]);

let newArr = [];
for (let i = 0; i < n; i++) {
  newArr.push(i + 1);
}

for (let i = 0; i < newArr.length - 1; i += 2) {
  newArr.push(newArr[i + 1]);
}

console.log(newArr[newArr.length - 1]);
