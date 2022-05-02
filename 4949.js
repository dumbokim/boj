const fs = require("fs");
let input = fs.readFileSync("./dev/stdin.txt").toString().trim().split(".\n");

for (let i = 0; i < input.length - 1; i++) {
  let isYes = true;
  let tempArr = [];

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] == "(") tempArr.push("(");
    else if (input[i][j] == "[") tempArr.push("[");
    else if (input[i][j] == ")") {
      if (tempArr[tempArr.length - 1] == "(") {
        tempArr.pop();
      } else {
        console.log("no");
        isYes = false;
        break;
      }
    } else if (input[i][j] == "]") {
      if (tempArr[tempArr.length - 1] == "[") {
        tempArr.pop();
      } else {
        console.log("no");
        isYes = false;
        break;
      }
    }
  }

  if (isYes) {
    if (tempArr.length == 0) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }
}
