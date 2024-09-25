//https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75

//Approach : 
//1) filter list to what has to be multiplied
//2) multiply and make it to array

//failed -> time exceed


//time exceed error code
var productExceptSelf = function(nums) {
    let res = [];
   
    for (let i = 0; i < nums.length; i++){
        let productArray = [];
        //let sum = 1;
        productArray = nums.filter((el, index) => i !== index);   
        const result = productArray.reduce(function multiply(sum, currValue) {
            return sum * currValue;
           // res.push(sum * currValue);
        }, 1);

        res.push(result);
        //console.log(result);
    }
    

    console.log(res);
};

// const nums = [1, 2, 3, 4];
// //Output: [24,12,8,6]
// productExceptSelf(nums);

var productExceptSelf2 = function(nums) {
     const n = nums.length;
    
    const prefix = new Array(n).fill(1);
    const suffix = new Array(n).fill(1);
    
    for (let i = 1; i < n; i++) {
        console.log('i', i)
        prefix[i] = prefix[i - 1] * nums[i - 1];
        console.log('prefix[i]', prefix[i - 1])
        // console.log('nums[i - 1]',nums[i - 1])
    }
    
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
        console.log('suffix[i]',suffix[i])
    }
    console.log('prefix', prefix);
    console.log('suffix' , suffix)
    const answer = [];
    for (let i = 0; i < n; i++) {
        answer[i] = prefix[i] * suffix[i];
    }
    
    //console.log(answer);
};

const nums = [1, 2, 3, 4];
// //Output: [24,12,8,6]
productExceptSelf2(nums);

var productExceptSelf3 = function (nums) {
    const output = Array(nums.length).fill(1);

    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] *= left;
        left *= nums[i];
    }

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= right;
        right *= nums[i];
    }

    return output;    
}