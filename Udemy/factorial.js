var fact = function factorial(num) {

    if (num === 1|| num === 0) return 1;

    return num * factorial(num - 1);

}

console.log(fact(7));