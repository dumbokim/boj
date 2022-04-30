const fs = require("fs");
let input = fs.readFileSync("./dev/stdin.txt").toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let temp = 0;

if (b > a) {
  temp = b;
  b = a;
  a = temp;
}

let tempA = a;
let tempB = b;

while (true) {
  console.log(tempA);
  let num = tempA % tempB;
  if (num == 0) {
    break;
  } else {
    tempA = tempB;
    tempB = num;
  }
}

console.log(tempB);
console.log((a * b) / tempB);
