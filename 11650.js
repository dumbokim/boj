const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().trim().split("\n");

const n = Number(input.shift());

input.sort((a, b) =>
  a.split(" ")[0] == b.split(" ")[0]
    ? a.split(" ")[1] - b.split(" ")[1]
    : a.split(" ")[0] - b.split(" ")[0]
);

console.log(input.join("\n"));
