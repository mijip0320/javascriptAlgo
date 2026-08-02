//control+option+N
//https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150

//judge point
// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }

var removeDuplicates = function (nums) {
  const expectedNums = [];

  for (let i = 0; i < nums.length; i++) {
    if (
      //  expectedNums.length > 0 &&
      expectedNums.filter((a) => a === nums[i]).length < 2
    ) {
      expectedNums.push(nums[i]);
    }
  }

  for (let j = 0; j < expectedNums.length; j++) {
    nums[j] = expectedNums[j];
  }

  return expectedNums.length;
};

// Input: nums = [1, 1, 1, 2, 2, 3];
// Output: (5, (nums = [1, 1, 2, 2, 3, _]));
// 반복적인 숫자는 최소 2번까지 허용, 고로 1은 두개, 2 두개, 3 한개로 k=5가 됨
// removeDuplicates 기준 만들기:
//1. nums를 for loop를 돌면서 새로운 리스트 tempList에 추가
//1-1. 이때 만약 tempList.filter((a) => a == 해당 요소).length가 2보다 크면 무시, 아니라면 추가
//2. 완성된 tempList를 nums[i]에 포함

const nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));
