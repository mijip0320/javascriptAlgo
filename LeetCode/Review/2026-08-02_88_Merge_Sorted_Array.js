// LeetCode 88. Merge Sorted Array - 복습용 빈 구현·테스트 파일
// 복습 날짜: 2026-08-02
// https://leetcode.com/problems/merge-sorted-array/
//
// 규칙
// 1. 기존 풀이 파일을 열지 않고 시작한다.
// 2. 아래 테스트의 예상 결과를 먼저 말하거나 적는다.
// 3. 접근법과 각 변수의 역할을 설명한 뒤 구현한다.
// 4. 자동 완성과 AI 코드 제안 없이 20~30분 안에 완료한다.

//생각 흐름 및 브레인스토밍 영역:
//목표 :
//Merge nums1 and nums2 into a single array sorted in non-decreasing order
//설명 :
//Input: nums1 = [1,2,3,0,0,0], m = 3(0에 해당되지 않은 숫자), nums2 = [2,5,6], n = 3
//Output: [1,2,2,3,5,6]
//1. nums1, nums2 배열들을 각각 유효한 범위(m,n)으로 수정 필요. 현재 input 기준으로 Nums1.slice(0,m), nums2(0,n) 작업 선행 필요
//2. 각각 0을 제거한 배열을들 우선 새로운 templist 배열에 합침(nums1.concat(nums2))
//3. tempList sorting 진행(templist.sort((a , b) => return a- b)
//4. 새로운 배열 tempList를 다시 nums1 배열에 넣고 리턴 진행
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} nums1을 직접 변경해야 한다.
 */
var merge = function (nums1, m, nums2, n) {
  // 여기에 직접 구현하세요.
  //nums1.slice(0, m);
  //nums2.slice(0, n);

  const res = nums1.slice(0, m);
  const res2 = nums2.slice(0, n);
  const tempList = [];
  //const tempList = res.concat(res2);
  //tempList.sort((a, b) => a - b);
  let i = m - 1; // nums1의 마지막 유효 원소
  let j = n - 1; // nums2의 마지막 원소
  let k = m + n - 1; // 결과를 넣을 nums1의 마지막 위치
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }

    k--;
  }
  for (let i = 0; i < tempList.length; i++) {
    nums1[i] = tempList[i];
  }

  return nums1;
};

function check(nums1, m, nums2, n, expected) {
  merge(nums1, m, nums2, n);

  const passed = JSON.stringify(nums1) === JSON.stringify(expected);
  console.log(passed ? "PASS" : "FAIL", {
    actual: nums1,
    expected,
  });
}

// 실행 전에 각 테스트가 어떤 경계 조건을 확인하는지 설명하세요.
check([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]);
check([1], 1, [], 0, [1]);
check([0], 0, [1], 1, [1]);
check([2, 0], 1, [1], 1, [1, 2]);
check(
  [-1, 0, 0, 3, 3, 3, 0, 0, 0],
  6,
  [1, 2, 2],
  3,
  [-1, 0, 0, 1, 2, 2, 3, 3, 3],
);
