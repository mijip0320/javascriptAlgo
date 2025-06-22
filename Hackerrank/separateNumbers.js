//https://www.hackerrank.com/challenges/separate-the-numbers/problem?isFullScreen=true
var seperate = function separateNumbers(s) {
  //연속적인 숫자를 만들 때 s.length/2 이상으로 넘어가면 더 이상 숫자를 만들 수 없음.
  const len = s.length;
  let subStr = "";
  for (let i = 1; i <= Math.floor(len / 2); i++) {
    subStr = s.substring(0, i); // 시작 숫자 문자열
    let firstNumStr = Number(subStr); // 시작 숫자
    let currentNum = firstNumStr;
    let temp = "";

    // console.log(
    //   `\n--- 시도: 시작 숫자 길이 = ${i}, firstNumStr = '${firstNumStr}' ---`
    // );

    while (temp.length < len) {
      //   console.log(`temp에 '${currentNum}' 추가`);
      //첫 숫자 입력 후 while문 돌면서 1씩 증가된 숫자들을 string으로 붙임
      temp += currentNum.toString(); // 숫자 시퀀스를 이어붙임
      currentNum++; // 다음 숫자로 증가
    }

    // console.log(`최종 temp: '${temp}'`);
    //temp로 만들어진 최종 string값과 처음에 입력된 s가 같아야 1씩 증가하는 string값이 됨
    if (temp === s) {
      console.log(`YES ${firstNumStr}`);
      return;
    }
  }

  console.log("NO");
};

seperate("91011");
// 1234;  YES 1
// 91011; YES 9
// 99100; YES 99
// 101103;
// 010203;
// 13;
// 1;
