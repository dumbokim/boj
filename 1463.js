const fs = require("fs");
let input = fs.readFileSync("./dev/stdin.txt").toString().trim().split(" ");

let num = parseInt(input[0]);

let times = [0, 0];

for (let i = 2; times.length <= 10000001; i++) {
  times[i] = times[i - 1] + 1;
  if (i % 2 == 0) times[i] = Math.min(times[i], times[i / 2] + 1);
  if (i % 3 == 0) times[i] = Math.min(times[i], times[i / 3] + 1);
}

console.log(times[num]);
