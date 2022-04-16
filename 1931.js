const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().split("\n");

const len = Number(input.shift());

for (let i = 0; i < len; i++) {
  input[i] = input[i].split(" ");
}

input.sort((a, b) => Number(a[0]) - Number(b[0]));

let answer = 0;
let lastEnd = Number.POSITIVE_INFINITY;

console.log(input);

for (let i = 0; i < input.length; i++) {
  if (lastEnd < Number(input[i][1])) continue;

  lastEnd = Number(input[i][1]);

  let temp = 1;
  let start = Number(input[i][0]);
  let end = Number(input[i][1]);

  for (let j = 0; j < input.length; j++) {
    if (i == j) continue;
    if (Number(input[j][0]) >= end) {
      temp++;
      end = Number(input[j][1]);
    } else if (Number(input[j][1] <= start)) {
      temp++;
      start = Number(input[j][0]);
    }
  }

  if (temp > answer) {
    answer = temp;
  }

  // temp > answer ? (answer = temp) : console.log(temp);
}

console.log(answer);
