var maxSubarraySum = function subarray(arr, num) {
    let maxNum = 0;
    let tempMax = 0;
    if(arr.length < num) return null;
    for (let i = 0; i < num; i++){
        maxNum += arr[i];
    }

    tempMax = maxNum;

    for (let i = num; i < arr.length; i++){
        tempMax = tempMax - arr[i - num] + arr[i];
        maxNum = Math.max(maxNum, tempMax);
    }

    console.log(maxNum);

}

 maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null