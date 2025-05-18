var fibonacci = function fib(num) {
    var arr = [1, 1];

    //if (num <= 1) return arr[0];

    const rec = (arr2) => {
        var sum = 0;


        // for (let i = 0; i < arr2.length; i++){
        //     sum += arr2[i];
        // }

        sum = arr2[arr2.length - 1] + arr2[arr2.length - 2];

        return sum;
    }

    for (let j = 0; j < num; j++){
       arr = arr.concat(rec([...arr])); 
    }

    

   // console.log(arr[num-1]);
    return arr[num - 1];
}

console.log(fibonacci(35)) //9227465

// function fib(n){
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }
