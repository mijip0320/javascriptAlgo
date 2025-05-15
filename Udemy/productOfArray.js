var prod = function productOfArray(arr) {

    var total = 1;

    for (let i = 0; i < arr.length; i++){
        total *= arr[i];
    }

    return total;
    
}

console.log(prod([1, 2, 3, 10]));