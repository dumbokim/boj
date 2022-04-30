const fs = require("fs");
let input = fs.readFileSync("./dev/stdin.txt").toString().trim().split("\n");

let arr = [0, 1, 2, 4];

for (let i = 4; i <= 11; i++) {
  arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
}

const cases = parseInt(input[0]);

for (let i = 1; i < input.length; i++) {
  console.log(arr[input[i]]);
}
