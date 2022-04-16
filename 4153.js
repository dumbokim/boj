const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().trim().split("\n");

input.pop();

let newArr = [];

for (let i = 0; i < input.length; i++) {
  const nums = input[i].split(" ");
  nums.sort((a, b) => a - b);
  nums[0] ** 2 + nums[1] ** 2 == nums[2] ** 2
    ? newArr.push("right")
    : newArr.push("wrong");
}

console.log(newArr.join("\n"));
