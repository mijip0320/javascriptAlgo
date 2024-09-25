//https://leetcode.com/problems/increasing-triplet-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

var increasingTriplet = function (nums) {
    let result = false;
    let list = [];
     nums.map((num, i) => list.push({num : num, index : i}))
    list.sort((x,y) => x.num > y.num ? 1 : -1);
    //console.log(list)


    for (let i = 0; i < list.length; i++){
        let filterList = list.filter((el) => el.index > list[i].index && el.num > list[i].num);
        filterList.sort((x,y) => x.index > y.index ? 1 : -1);
        console.log(filterList);
        if (filterList.length >= 2
             
          // && filterList[0].num < filterList[1].num 
        ) {
            console.log(filterList);
            result = true;
            break;
        }
        
    }

    console.log(result)
};

// const nums = [9,10,5,11,10,9,8];
// increasingTriplet(nums);

var increasingTriplet2 = function (nums) {
    let first=Infinity; //양의 정수
    let second=Infinity;
    for (let third of nums) {
        console.log(third)
        // If the third is smaller than the first variable then make first = third...
        if(third < first){
            first = third;
        }
        // If the third is in between the first and second then move second to third place...
        else if(third < second && third > first){
            second = third;
        }
        // If the right is greater than the first and second then return true...
        else if(third > second && third > first) return true;
    }
    // After the end of the loop if no such Increasing Triplet Subsequence indices exists then return false...
    console.log(false);
}

const nums = [9,10,5,11,10,9,8];
increasingTriplet2(nums);