const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().split("\n");

input[0] = "\b\b";

input.sort((a, b) => a - b);

console.log(input.join("\n"));
