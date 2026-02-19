//control+option+N
//https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true
var hurdle = function hurdleRace(k, height) {
  const max = Math.max(...height);
  let res = 0;

  if (max - k > 0) res = max - k;
  return res;
};

console.log(hurdle(4, [1, 6, 3, 5, 2]));
