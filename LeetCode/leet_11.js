//https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {number[]} height
 * @return {number}
 * 
 * 1. 포인터 2개로 이동
 *   - 1. 포인터는 기준을 잡음
 *   - 2. 포인터는 탐색 실행해서 최댓값 가져옴
 */
var maxArea = function (height) {
    
    const heightList = [];
    const maxList = [];
    height.map((el, i) => heightList.push([el, i]));

    console.log(heightList);

    heightList.sort((a,b) => b[0]-a[0]);
    
    console.log(heightList);
    let j = 1;
    heightList.map((h, i) => 
        {
        if (i !== heightList.length && j !== heightList.length ) {
            const x = Math.abs(heightList[i][1] - heightList[j][1]);
            if (heightList[i][0] >= heightList[j][0] && x !== 0) {
                    
                    maxList.push(heightList[j][0] * x);
                //j++;
                
                if (heightList[i][0] < heightList[j][1]) {
                    j++;
                }
              }
            }
        }
    )

    console.log("maxList", maxList)
 
};
            //  0  1  2  3  4  5  6  7  8
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
//              9  1  4  8  5  6  2  7  3
maxArea(height);