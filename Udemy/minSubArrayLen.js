var minSubArrayLen = function subarray(arr, num) {
     
    let maxNum = [...arr].sort((a,b) => a-b)[arr.length - 1];

    if (maxNum >= num) {
        console.log('1');
        return;
    }
    // console.log(arr.indexOf(maxNum));
    let maxIndex = arr.indexOf(maxNum);

    let i = maxIndex !== 0 ? maxIndex - 1 : 0;
    let j = maxIndex;
    let tempMax =  maxNum;
    while (i >= 0 && j < arr.length) {
            
        if (maxIndex !== 0) {
            j = j === maxIndex ? maxIndex + 1 : j;
            
            
            if (arr[i] > arr[j]) {
                tempMax += arr[i];
            } else {
                tempMax += arr[j];
            }

            if (tempMax >= num) {
                console.log(j - i + 1);
                return;
            }

            i--;
            j++;
              
            
        } else {
             j = j === 0 ? 1 : j
            let tempMax = maxNum + arr[j];
            if (tempMax >= num) {
                console.log(j);
                return;
            }
             j++;
        }

        

        
    }

    //console.log(j-i);

}

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
 minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

//flow
//1. 배열에서 제일 큰 숫자를 찾는다
//2. 해당 숫자가 num보다 크거나 같으면 바로 1로 리턴
//3. 아니라면, 해당 숫자의 인덱스를 찾고 0이 아니라면 그 중심으로 왼쪽(i)/오른쪽(j)으로 탐색
//4. 0이라면 오른쪽으로 탐색해서 더해본다
//5. i/j값들을 비교하면서 더 큰 숫자를 선택해서 더해서 해당 숫자가 num보다 크거나 같으면 i, j의 위치값으로 갯수 계산