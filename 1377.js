const fs = require("fs");
let A = fs.readFileSync("/dev/stdin.txt").toString().split("\n");

const N = Number(A[0]);
for (let i = 1; i <= N; i++) {
  A[i] = Number(A[i]);
}

let changed = false;
let temp = 0;

for (let i = 0; i < N + 1; i++) {
  changed = false;
  for (let j = 0; j < N - i; j++) {
    if (A[j] > A[j + 1]) {
      changed = true;
      temp = A[j];
      A[j] = A[j + 1];
      A[j + 1] = temp;
    }
  }
  if (changed == false) {
    console.log(i);
    break;
  }
}
