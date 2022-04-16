const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().trim().split("\n");

const num = Number(input[0]);
const num2 = Number(input[2]);

const numArr1 = input[1].split(" ");

const numArr2 = input[3].split(" ");

let numMap = {};
for (let i = 0; i < num; i++) {
  numMap[numArr1[i]] == undefined
    ? (numMap[numArr1[i]] = 1)
    : (numMap[numArr1[i]] = numMap[numArr1[i]] + 1);
}

let answerArr = [];
for (let i = 0; i < num2; i++) {
  numMap[numArr2[i]] == undefined
    ? answerArr.push(0)
    : answerArr.push(numMap[numArr2[i]]);
}

console.log(answerArr.join(" "));
