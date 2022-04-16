const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().split("\n");

const num1 = Number(input[0]);
const num2 = Number(input[2]);

const numArr1 = input[1].split(" ");
const numArr2 = input[3].split(" ");

let numMap = {};

for (let i = 0; i < num1; i++) {
  numMap[numArr1[i]] == undefined ? (numMap[numArr1[i]] = 1) : "";
}

let answerArr = [];

for (let i = 0; i < num2; i++) {
  numMap[numArr2[i]] == undefined ? answerArr.push(0) : answerArr.push(1);
}

console.log(answerArr.join("\n"));
