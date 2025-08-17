//https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true
var book = function drawingBook(n, p) {
  const fromFront = Math.floor(p / 2);
  const fromBack = Math.floor(n / 2) - Math.floor(p / 2);
  return Math.min(fromFront, fromBack);
};

console.log(book(6, 2));
