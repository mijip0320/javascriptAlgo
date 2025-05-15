var fibonacci = function fib(num) {
    var arr = [1, 1];

    if (num <= 1) return arr[0];

    const rec = (arr2) => {
        var sum = 0;

        for (let i = 0; i < arr2.length; i++){
            sum += arr2[i];
        }

        return sum;
    }

    arr = arr.concat(rec([...arr]));

    console.log(arr);

}

console.log(fibonacci(35)) //9227465