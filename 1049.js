const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().split("\n");
const input1 = input.shift().split(" ");
const cuts = Number(input1[0]);
const brands = Number(input1[1]);

let six = 1000;
let one = 1000;

for (let i = 0; i < brands; i++) {
  const splited = input[i].split(" ");
  const six2 = Number(splited[0]);
  const one2 = Number(splited[1]);
  six2 < six ? (six = six2) : "";
  one2 < one ? (one = one2) : "";
}

if (six >= one * 6) {
  console.log(cuts * one);
} else {
  if (cuts >= 6) {
    let price1 = parseInt(cuts / 6) * six + (cuts % 6) * one;
    let price2 = Math.ceil(cuts / 6) * six;
    console.log(price1 <= price2 ? price1 : price2);
  } else {
    let price1 = (cuts % 6) * one;
    let price2 = Math.ceil(cuts / 6) * six;
    console.log(price1 <= price2 ? price1 : price2);
  }
}
