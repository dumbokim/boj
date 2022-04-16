const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().split("\n");

const first = Number(input.shift());

let sortArr = [[]];

for (let i = 0; i < first; i++) {
  const len = input[i].length;
  if (sortArr[len] == undefined) sortArr[len] = [input[i]];
  else sortArr[len].push(input[i]);
}

let newArr = [];
for (let i = 0; i < sortArr.length; i++) {
  if (sortArr[i] != undefined) {
    if (sortArr[i].length > 1) sortArr[i].sort();
    for (let j = 0; j < sortArr[i].length; j++) {
      sortArr[i][j] != newArr[newArr.length - 1]
        ? newArr.push(sortArr[i][j])
        : "";
    }
  }
}

for (let i = 0; i < newArr.length; i++) {
  console.log(newArr[i]);
}
