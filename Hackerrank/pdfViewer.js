//https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?isFullScreen=true

// 알파벳 위치는 ASCII 코드로 바로 계산 가능해.

// a의 코드: 97

// 어떤 문자 ch의 코드에서 a를 빼면 0~25 인덱스가 나옴
var pdfViewer = function designerPdfViewer(h, word) {
  const heightsInWord = [];
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    const idx = ch.charCodeAt(0) - 97; // 97 === 'a'
    heightsInWord.push(h[idx]); // ✅ 높이를 push
  }

  const maxH = Math.max(...heightsInWord); // ✅ 스프레드

  return word.length * maxH;
};

console.log(
  pdfViewer(
    [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      7,
    ],
    "zaba",
  ),
);
