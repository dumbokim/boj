(function doIt() {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin.txt").toString().split("\n");

  const len = Number(input.shift());

  let usedArr = [];
  let answerArr = [];

  let index = 1;
  let answerIndex = 0;
  while (answerIndex < len) {
    console.log(index);
    const targetNum = Number(input[answerIndex]);
    console.log(targetNum);

    if (index == 1) {
      for (let i = 1; i <= targetNum; i++) {
        answerArr.push("+");
      }
      answerArr.push("-");
      index += targetNum;
      answerIndex++;
      usedArr[targetNum] = 0;
    }

    if (targetNum > index) {
      console.log("big");
      for (let i = index; i <= targetNum; i++) {
        answerArr.push("+");
      }
      answerArr.push("-");
      answerIndex++;
      usedArr[targetNum] = 0;
      index += targetNum - index;
    } else if (targetNum < index) {
      const exNum = Number(input[answerIndex - 1]);
      console.log("ex ", exNum);
      console.log("sm");
      if (targetNum != exNum - 1) {
        if (usedArr[exNum] == 0) {
          console.log(usedArr);
          for (let i = 0; i < answerArr.length; i++) {
            console.log(answerArr[i]);
          }
          return console.log("NO");
        } else {
          answerArr.push("-");
          answerIndex++;

          usedArr[targetNum] = 0;
        }
      } else {
        answerArr.push("-");
        answerIndex++;

        usedArr[targetNum] = 0;
      }
    } else if (targetNum == index) {
      answerArr.push("+");
      answerArr.push("-");
      usedArr[targetNum] = 0;
    }
  }

  // console.log(usedArr);

  // for (let i = 0; i < answerArr.length; i++) {
  //   console.log(answerArr[i]);
  // }
})();
