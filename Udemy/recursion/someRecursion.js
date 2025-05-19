
 
var some = function someRecursion(arr, callBack) {

    if (arr.length === 0) return false;
    if (callBack(arr[0])) return true;

    return someRecursion(arr.slice(1), callBack)
}

 
const isOdd = val => val % 2 !== 0;
console.log(some([1,2,3,4], isOdd)) // true