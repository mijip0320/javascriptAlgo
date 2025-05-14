var minSubArrayLen = function subarray(arr, sum) {
 //https://selonjulie.tistory.com/111    
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < arr.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
	  end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
	  total -= nums[start];
	  start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;

}

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
 minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

//flow
//1. 배열에서 제일 큰 숫자를 찾는다
//2. 해당 숫자가 num보다 크거나 같으면 바로 1로 리턴
//3. 아니라면, 해당 숫자의 인덱스를 찾고 0이 아니라면 그 중심으로 왼쪽(i)/오른쪽(j)으로 탐색
//4. 0이라면 오른쪽으로 탐색해서 더해본다
//5. i/j값들을 비교하면서 더 큰 숫자를 선택해서 더해서 해당 숫자가 num보다 크거나 같으면 i, j의 위치값으로 갯수 계산