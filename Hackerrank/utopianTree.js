//https://www.hackerrank.com/challenges/utopian-tree/problem?isFullScreen=true
var utopian = function utopianTree(n) {
  let h = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1)
      h *= 2; // 홀수 사이클: 봄
    else h += 1; // 짝수 사이클: 여름
  }
  return h;
};

console.log(utopian(4));
