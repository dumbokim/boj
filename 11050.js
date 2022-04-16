const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().trim().split(" ");

const n = Number(input[0]);
const k = Number(input[1]);

let mo = 1;
let so = 1;

for (let i = n; i > n - k; i--) {
  mo *= i;
}

for (let i = k; i > 1; i--) {
  so *= i;
}

console.log(mo / so);
