//https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true
var pickNumbers = function pickingNumbers(a) {
  //freq[n+1]도 접근하니까, 루프를 n = 0 ~ 98까지만 돌리거나
  //freq를 101칸으로 만들어서 freq[100]까지 안전하게 두는 방식
  const freq = new Array(101).fill(0); // 0~100
  for (const x of a) freq[x]++;

  let best = 0;
  for (let n = 0; n < 100; n++) {
    // n=0..99, n+1=1..100 안전
    best = Math.max(best, freq[n] + freq[n + 1]);
  }

  return best;
};

console.log(pickNumbers([4, 6, 5, 3, 3, 1]));
