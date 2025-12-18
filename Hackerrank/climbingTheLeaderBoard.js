//https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true
var climbLeaderBoard = function climbingLeaderboard(ranked, player) {
  // 1) ranked 중복 제거 + 내림차순 유지
  const unique = [];
  for (const s of ranked) {
    if (unique.length === 0 || unique[unique.length - 1] !== s) {
      unique.push(s);
    }
  }

  // 2) 투포인터
  const res = [];
  let i = unique.length - 1; // 가장 낮은 점수 인덱스

  for (const p of player) {
    while (i >= 0 && p >= unique[i]) i--;
    // i가 -1이면 1등, 아니면 i 위치 다음 등수
    res.push(i + 2);
  }

  return res;
};

console.log(climbLeaderBoard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]));
