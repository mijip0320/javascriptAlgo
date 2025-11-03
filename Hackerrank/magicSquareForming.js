//https://www.hackerrank.com/challenges/magic-square-forming/problem?isFullScreen=true
var magicSquare = function magicSquareForming(s) {
  const candidates = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  // 각 후보와의 비용을 배열로 수집
  const costs = candidates.map((m) => {
    let sum = 0;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        sum += Math.abs(s[r][c] - m[r][c]);
      }
    }
    return sum;
  });

  console.log(costs);
  return Math.min(...costs);
};

console.log(
  magicSquare([
    [4, 8, 2],
    [4, 5, 7],
    [6, 1, 6],
  ])
);
