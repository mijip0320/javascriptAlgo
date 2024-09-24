//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75

var kidsWithCandies = function(candies, extraCandies) {
    let result = Array.from(candies, (x) => false);

    for (let i = 0; i < candies.length; i++){
        const sum = candies[i] + extraCandies;
         
        const temp = candies.filter((el, index) => sum < el ? el : '')
        if (temp.length === 0) {
            result[i] = true
        }
       
       
    }

    console.log(result)
};


const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
kidsWithCandies(candies,extraCandies )