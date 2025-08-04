//https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
var count = function countApplesandOranges(s, t, a, b, apples, oranges) {
  let countApples = 0;
  let countOranges = 0;

  if (apples.length > 0) {
    apples.map((el) => {
      //newApples.push(el + a);
      const temp = el + a;
      if (temp >= s && temp <= t) {
        countApples++;
      }
    });
  }

  if (oranges.length > 0) {
    oranges.map((el) => {
      //newOranges.push(el + b);
      const temp = el + b;
      if (temp >= s && temp <= t) {
        countOranges++;
      }
    });
  }

  // return [countApples, countOranges];
  return `${countApples}\n${countOranges}`;
};

// console.log(count(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
console.log(count(2, 3, 1, 5, [2], [-2]));

//s : sam's start location
//t : sam's ending location
//a : apple tree location
//b : orange tree location
//apples : apple array
//oranges : orange array
