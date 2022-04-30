const fs = require("fs");
let input = fs.readFileSync("./dev/stdin.txt").toString().trim().split(" ");

const num = parseInt(input[0]);

let answer = 0;

if (num % 2 == 0) {
  const last = num / 2;

  for (let i = 0; i <= last; i++) {
    const big = num - i;

    let addNum = 1;
    console.log(big);

    if (i == 0 || i == last) {
      continue;
    } else {
      for (let j = 0; j < i; j++) {
        addNum *= big - j;
        addNum /= j + 1;
      }
      console.log((addNum %= 10007));

      answer += addNum %= 10007;
      // answer += addNum;
    }
  }

  answer += 2;
} else {
  const last = (num - 1) / 2;

  for (let i = 0; i <= last; i++) {
    const big = num - i;

    let addNum = 1;
    console.log(big);

    if (i == 0) {
      continue;
    } else {
      for (let j = 0; j < i; j++) {
        addNum *= big - j;
      }

      for (let j = 1; j <= i; j++) {
        addNum /= j;
      }
      answer += addNum %= 10007;
    }
  }

  answer += 1;
}

console.log((answer %= 10007));

// 틀림
