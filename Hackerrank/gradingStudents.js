//https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
var gradingStudents = function grading(grades) {
  const res = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      res.push(grades[i]);
      continue;
    }
    let resp = Math.round(grades[i] / 5) * 5;
    if (resp < grades[i]) resp += 5;
    if (Math.abs(resp - grades[i]) < 3) {
      res.push(resp);
    } else {
      res.push(grades[i]);
    }
  }
  return res;
};

console.log(gradingStudents([73, 67, 38, 33]));
