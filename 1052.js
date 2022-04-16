const fs = require("fs");
const input = fs.readFileSync("/dev/stdin.txt").toString().split(" ");

let all = Number(input[0]);
const bottles = Number(input[1]);

let liter = 1;
let buy = 0;

const bb = 2 ** bottles;

while (all > bottles) {
  if (all <= bb) {
    all = bottles;
    break;
  } else if (all % 2 == 0) {
    all /= 2;
    liter *= 2;
  } else {
    buy += liter;
    all++;
  }
}

if (all <= bottles) {
  console.log(buy);
} else {
  console.log(-1);
}
