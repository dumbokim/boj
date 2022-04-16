const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().split("\n");

const first = input.shift().split(" ");
const N = Number(first[0]);
const M = Number(first[1]);

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split("");
}

let litI = 0;
let litJ = 0;

let tempW = 0;
let tempB = 0;

for (let i = 0; i < N - 7; i++) {
  let tempW2 = 0;
  for (let j = 0; j < M - 7; j++) {
    let tempB2 = 0;
    for (let k = 0; k < 8; k++) {
      for (let l = 0; l < 8; l++) {
        input[i + k][j + l] != "W" ? tempB++ : tempW++;
      }
    }
    if (Math.abs(tempW - tempB) > Math.abs(tempW2 - tempB2)) {
      litI = i;
      litJ = j;
    }
  }
}
console.log(litI, litJ);

let WB = 0;
let BW = 0;

for (let i = litI; i < litI + 8; i++) {
  for (let j = litJ; j < litJ + 8; j += 2) {
    if (input[i][j] + input[i][j + 1] == "WB") WB++;
    else if (input[i][j] + input[i][j + 1] == "BW") BW++;
  }
}

let target = "W";
let target2 = "B";

if (WB < BW) {
  target = "B";
  target2 = "W";
}

let answer = 0;

console.log(WB, BW);

for (let i = litI; i < litI + 8; i++) {
  for (let j = litJ; j < litJ + 8; j++) {
    if (i % 2 == 0) {
      if (j % 2 == 0) input[i][j] == target ? answer++ : "";
      else input[i][j] == target2 ? answer++ : "";
    } else {
      if (j % 2 == 0) input[i][j] == target2 ? answer++ : "";
      else input[i][j] == target ? answer++ : "";
    }
  }
}

console.log(answer);
