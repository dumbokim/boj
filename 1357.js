const fs = require("fs");
let input = fs.readFileSync("./dev/stdin.txt").toString().trim().split(" ");

let num1 = input[0].split("");
let num2 = input[1].split("");

let real1 = [];
let real2 = [];

for (let i = 0; i < num1.length; i++) {
  real1.push(num1[num1.length - 1 - i]);
}

for (let i = 0; i < num2.length; i++) {
  real2.push(num2[num2.length - 1 - i]);
}

let temp1 = Number(real1.join(""));
let temp2 = Number(real2.join(""));

let tempAnswer = (temp1 + temp2).toString();

let real3 = [];
for (let i = 0; i < tempAnswer.length; i++) {
  real3.push(tempAnswer[tempAnswer.length - 1 - i]);
}

console.log(Number(real3.join("")));
