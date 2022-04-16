const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().split("\n");

const first = input.shift().split(" ");
const K = Number(first[0]);
const N = Number(first[1]);

let all = 0;

for (let i = 0; i < K; i++) {
  const num = Number(input[i]);
  all += num;
}

let len = Math.floor(all / N);

let real = 0;
let len2 = 0;

let temp = 0;

if (K == 1 && N == 1) {
  console.log(Number(input[0]));
} else {
  while (real < N) {
    real = 0;
    for (let i = 0; i < K; i++) {
      real += Math.floor(Number(input[i]) / len);
    }
    if (real < N) {
      temp++;
      len = Math.floor(all / (N + temp));
    } else {
      len2 = Math.floor(all / (N + temp - 1));
    }
  }

  while (len != len2) {
    real = 0;
    const half = Math.floor((len + len2) / 2);

    for (let i = 0; i < K; i++) {
      real += Math.floor(Number(input[i]) / half);
    }

    if (real >= N) {
      len = Math.floor((len + len2) / 2) + 1;
    } else if (real < N) {
      len2 = Math.floor((len + len2) / 2);
    }
  }

  real = 0;

  for (let i = 0; i < K; i++) {
    real += Math.floor(Number(input[i]) / len);
  }

  if (real < N) {
    console.log(len - 1);
  } else {
    console.log(len);
  }
}
