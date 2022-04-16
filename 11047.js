const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().split("\n");
const input1 = input.shift().split(" ");

const many = input1[0];
let money = input1[1];

let startIndex = 0;
let coins = 0;

for (let i = 0; i < many; i++) {
  input[i] = Number(input[i]);
  input[i] <= money ? (startIndex = i) : "";
}

while (money > 0) {
  coins += parseInt(money / input[startIndex]);
  money %= input[startIndex];
  startIndex -= 1;
}

console.log(coins);
