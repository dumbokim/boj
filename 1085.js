const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().trim().split(" ");
const x = Number(input[0]);
const y = Number(input[1]);
const w = Number(input[2]);
const h = Number(input[3]);

let xlen = 0;
let ylen = 0;

w - x > x ? (xlen = x) : (xlen = w - x);

h - y > y ? (ylen = y) : (ylen = h - y);

xlen > ylen ? console.log(ylen) : console.log(xlen);
