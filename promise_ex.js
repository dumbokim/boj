const promise = new Promise((resolve, reject) => {
  // Promise 객체는 생성되었을 때 () 내부 함수를 자동적으로 실행시킨다!
  setTimeout(() => {
    resolve('promise object created')
  }, 2000);
})

// promise 객체 내부 함수가 끝나면 전달 받은 값을 출력
promise.then(console.log);

// 1초 후 출력
setTimeout(() => {
  console.log('set time out done');
}, 1000);

console.log('the last log');
