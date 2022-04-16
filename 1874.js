(function doIt() {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin.txt").toString().split("\n");

  const len = Number(input.shift());

  let answerArr = [];
  let tempArr = [];

  let targetIndex = 0;
  let inputNum = 0;

  let popPushArr = [];

  while (answerArr.length < len) {
    const targetNum = Number(input[targetIndex]);
    if (answerArr.length == 0 || targetNum >= answerArr[targetIndex - 1]) {
      if (tempArr[tempArr.length - 1] == targetNum) {
        const popedNum = tempArr.pop();
        answerArr.push(popedNum);
        targetIndex++;
        popPushArr.push("-");
      } else {
        tempArr.push(inputNum + 1);
        inputNum++;
        popPushArr.push("+");
      }
    } else if (targetNum < answerArr[targetIndex - 1]) {
      const popedNum = tempArr.pop();
      if (popedNum != targetNum) {
        return console.log("NO");
      } else {
        answerArr.push(popedNum);
        targetIndex++;
        popPushArr.push("-");
      }
    }
  }

  for (let i = 0; i < popPushArr.length; i++) {
    console.log(popPushArr[i]);
  }
})();
