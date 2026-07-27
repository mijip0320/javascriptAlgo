//https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
//control+option+N

var merge = function (nums1, m, nums2, n) {
  //   nums1 = nums1.filter((el) => el !== 0);
  //   nums2 = nums2.filter((el2) => el2 !== 0);
  //   nums1 = nums1.concat(nums2).sort();
  //   return nums1;
  //상단 코드는 에러, 왜냐하면:
  //     filter() → 새 배열을 반환
  // concat() → 새 배열을 반환
  // sort() → 호출한 배열 자체를 변경하고, 같은 배열을 반환
  //문제는 새 배열이 아닌, 기존 nums1 배열에 담아서 리턴해주는걸 요구함
  nums1.splice(m, n);
  //m번 인덱스부터 시작해서
  // n개의 원소를 제거
  // 원본 nums1을 직접 변경
  //문제에서 처음부터 nums1의 뒤에 n개의 공간이 있다고 보장하기 때문에 그 공간을 제거하는 것
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
  return nums1;
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
console.log(merge(nums1, m, nums2, n));
