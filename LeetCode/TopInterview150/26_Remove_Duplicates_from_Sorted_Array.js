/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const expectList = [...new Set(nums)];

  const k = expectList.length;
  for (let i = 0; i < k; i++) {
    nums[i] = expectList[i];
  }
  return k;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
