//https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true
var shop = function getMoneySpent(keyboards, drives, b) {
  const k = keyboards.sort(function (comp1, comp2) {
    return comp2 - comp1;
  });
  const d = drives.sort(function (comp1, comp2) {
    return comp2 - comp1;
  });

  const res = [];

  for (let i = 0; i < k.length; i++) {
    for (let j = 0; j < d.length; j++) {
      let sum = k[i] + d[j];
      if (sum <= b) {
        res.push(sum);
      }
    }
  }

  return res.length > 0 ? Math.max.apply(null, res) : -1;
};

console.log(shop([3, 1], [5, 2, 8], 10));
