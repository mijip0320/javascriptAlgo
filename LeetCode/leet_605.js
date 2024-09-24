//https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75

var canPlaceFlowers = function (flowerbed , n) {
    let result = false;
    let count = n;
     
    if ((flowerbed.length === 1 && flowerbed[0] === 0) || n === 0) {
        result = true;
    } else {
        for (let i = 0; i < flowerbed.length; i++){
        
        if (flowerbed[i] === 0 && ((flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0)
            || (i === 0 && flowerbed[i + 1] === 0)
            || (i === flowerbed.length - 1 && flowerbed[i - 1] === 0))
        ) {
             
            flowerbed[i] = 1;
            count -= 1;
            if (count === 0) break;
            if (count > 0) i = 0;
            
        }
       if (i === flowerbed.length-1) break;
       
    }

   

    if (count === 0) result = true;
 
    }
 
   

    console.log(result);
};

const flowerbed = [1, 0, 0, 0, 1];
const n = 1;

// canPlaceFlowers(flowerbed, n)

//  for (let i = 0; i < flowerbed.length; i++) {
//         const left = i === 0 || flowerbed[i - 1] === 0;
//         const right = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
        
//         if (left && right && flowerbed[i] === 0) {
//             flowerbed[i] = 1;
//             n--;
//         }
//     }
//     return n <= 0;   