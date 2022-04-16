const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().trim().split("\n");

for (let i = 1; i < input.length; i += 2) {
  const NM = input[i].split(" ");
  const N = Number(NM[0]);
  let targetIndex = Number(NM[1]);
  let targetQue = input[i + 1].split(" ");
  let impArr = input[i + 1].split(" ");

  impArr.sort((a, b) => b - a);

  let printIdx = 0;
  let impIdx = 0;
  for (let j = 0; j < targetQue.length; j++) {
    if (targetQue[j] == impArr[impIdx]) {
      impIdx++;
      printIdx++;
      if (targetIndex == j) {
        console.log(printIdx);
        break;
      }
    } else {
      targetQue.push(targetQue[j]);
      if (targetIndex == j) {
        targetIndex = targetQue.length - 1;
      }
    }
  }
}
