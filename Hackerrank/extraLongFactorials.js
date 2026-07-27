//control+option+N
//https://www.hackerrank.com/challenges/extra-long-factorials/problem?isFullScreen=true

//JS의 number는 IEEE-754 64비트 부동소수점이라서 정수로 정확하게 표현 가능한 범위가 2^53 - 1(약 9e15)까지
//1 → Number 타입(일반 숫자)
//1n → BigInt 타입(아주 큰 정수)
//곱셈 후 리턴 시 BigInt 타입 표시(접미사)처럼 숫자 끝에 n이 표시될 수 있어 toString으로 리턴하는게 제일 안전
var factorials = function extraLongFactorials(n) {
  let num = 1n; // BigInt 리터럴
  for (let i = 2n; i <= BigInt(n); i++) {
    num *= i;
  }

  return num.toString();
};

console.log(factorials(25));
