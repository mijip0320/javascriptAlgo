//https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
//control+option+N

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const n = nums.length;
  const average = n / 2;
  const counts = new Map();
  for (let i = 0; i < n; i++) {
    const currentCount = counts.get(nums[i]) ?? 0;

    counts.set(nums[i], currentCount + 1);
  }

  let maxCount = 0;
  for (const [key, value] of counts) {
    // console.log(key, value);
    if (value > average && value > maxCount) maxCount = key;
  }
  return maxCount;
};

const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
