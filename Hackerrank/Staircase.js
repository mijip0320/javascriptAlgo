//https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
var staircase = function staircase(n) {
  let count = 1;

  let finalStr = "";

  while (count <= n) {
    for (let i = 0; i < n; i++) {
      let str = "";
      if (i < n - count) {
        str += " ";
        //return "";
      } else {
        str += "#";
        //return "#";
      }
      finalStr += str;
    }
    finalStr += "\n";
    count++;
  }

  return finalStr;
};

console.log(staircase(6)); // [1, 2, 3, 4, 5]
