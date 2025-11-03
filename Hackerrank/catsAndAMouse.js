//https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true
var catAndMouse = function catMouse(x, y, z) {
  const subtractX = Math.abs(z - x); //cat A
  const subtractY = Math.abs(z - y); //cat B

  if (subtractX > subtractY) return "Cat B";
  else if (subtractX < subtractY) return "Cat A";
  else return "Mouse C";
};

console.log(catAndMouse(2, 5, 4));
