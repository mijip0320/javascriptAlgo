//control+option+N
//https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
     
        // const filterZero = nums.filter((el) => el === 0);
        // const nonZero = nums.filter((el) => el !== 0);
        // const copy = nonZero.sort((a,b) => a-b);
        // console.log(copy.concat(filterZero))
        let low = 0;
        let high = low + 1;
        while (high <= nums.length - 1) {
            if (nums[low] !== 0) {
            low++;
            high++;
        } else {
            if (nums[high] !== 0) {
                [nums[low], nums[high]] = [nums[high], nums[low]];
                low++;
            }
            high++;
        }
        }
    console.log(nums);


    //  let i = 0;  // Pointer to track the position of the next non-zero element

    // for (let j = 0; j < nums.length; j++) {
    //     if (nums[j] !== 0) {
    //         [nums[i], nums[j]] = [nums[j], nums[i]];  // Swap using array destructuring
    //         i++;
    //     }
    // }
 
};

const nums = [0, 1, 0, 3, 12];

moveZeroes(nums)