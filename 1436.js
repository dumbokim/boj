const fs = require("fs");
let input = fs.readFileSync("./dev/stdin.txt").toString().trim().split("\n");

let num = Number(input[0]);

let answer = 1;
let startNum = 666;
while (answer < num) {
  startNum++;
  if (startNum.toString().includes("666")) {
    answer++;
  }
}

console.log(startNum);
