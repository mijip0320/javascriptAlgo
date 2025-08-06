//https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true
var merchant = function sockMerchant(arr) {
  const temp = [...arr.sort()];
  //10 - 4, 20 - 3, 30 - 1, 50 - 1;
  let countPair = 0;

  for (let i = 1; i < temp.length; i++) {
    if (i > 0 && temp[i] !== 0 && temp[i - 1] === temp[i]) {
      countPair++;
      temp[i] = 0;
    }
  }

  return countPair;
};

console.log(merchant([10, 20, 20, 10, 10, 30, 50, 10, 20]));
