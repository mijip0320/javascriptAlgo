// LeetCode 26. Remove Duplicates from Sorted Array - 복습용 빈 구현·테스트 파일
// 복습 날짜: 2026-08-04
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
//
// 규칙
// 1. 기존 풀이 파일을 열지 않고 시작한다.
// 2. 문제를 내 말로 설명하고, 각 테스트의 예상 결과를 먼저 적는다.
// 3. 접근법과 각 변수의 역할, 반복 중 유지되는 조건을 설명한 뒤 구현한다.
// 4. 자동 완성과 AI 코드 제안 없이 20~30분 안에 완료한다.

// 접근법 및 브레인스토밍
// 1. 이미 nums가 순차적으로 정렬되어있어 따로 정렬 필요없이 항목 하나씩 for loop를 통해 비교 가능
// 2. nums에 대한 루프를 돌면서,
//   2-1. expectedNums가 빈 배열이면 nums[i] 추가
//   2-2. 빈 배열이 아니라면, expectedNums[i-1] === nums[i]이라면 무시, 아니라면 nums[i] 추가
// 3. expectedNums 배열을 루프 돌면서 다시 nums 배열에 대입, expectedNums.length인 k를 리턴함

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 여기에 직접 구현하세요.

const expectedNums = [];
 let pointer = 0;
  //0, 0, 1, 1, 1, 2, 2, 3, 3, 4
  for(let i=0; i<nums.length; i++){
    if(expectedNums[pointer] !== nums[i] ) {
      expectedNums.push(nums[i]);
      pointer = expectedNums.length - 1;
    };
    
  }
const k= expectedNums.length
  for(let j=0; j<k; j++){
    nums[j] = expectedNums[j];
  }

  return k;
};

function check(nums, expectedK, expectedPrefix) {
  const k = removeDuplicates(nums);
  const actualPrefix = nums.slice(0, k);
  const passed =
    k === expectedK &&
    JSON.stringify(actualPrefix) === JSON.stringify(expectedPrefix);

  console.log(passed ? "PASS" : "FAIL", {
    k,
    expectedK,
    actualPrefix,
    expectedPrefix,
  });
}

// 실행 전에 각 테스트가 어떤 경계 조건을 확인하는지 설명하세요.
check([1, 1, 2], 2, [1, 2]);
check([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 5, [0, 1, 2, 3, 4]);
check([1], 1, [1]);
check([2, 2, 2, 2], 1, [2]);
check([-3, -3, -1, 0, 0, 2, 2, 5], 5, [-3, -1, 0, 2, 5]);
