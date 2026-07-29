//https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
//control+option+N
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  //filter는 새로운 배열을 리턴하기 때문에 현재 문제에선 부적합
  //return nums.filter((el) => el !== val).length;
  const filtered = nums.filter((el) => el !== val);
  const k = filtered.length;

  for (let i = 0; i < k; i++) {
    nums[i] = filtered[i];
  }

  return k;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

console.log(removeElement(nums, val));
