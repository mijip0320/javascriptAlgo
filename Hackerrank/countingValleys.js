//https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true
var valleys = function countingValleys(steps, path) {
  let count = 0;
  let current = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      current += 1;
    } else if (path[i] === "D") {
      current -= 1;
    }

    if (current === 0 && path[i] === "U") {
      count++;
    }
  }

  return count;
};

console.log(valleys(8, "UDDDUDUU"));
