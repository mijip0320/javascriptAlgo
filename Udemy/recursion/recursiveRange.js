var recursive = function recursiveRange(num) {

    if (num === 1) return 1;

    return num + recursiveRange(num - 1);

}

console.log(recursive(10)); //55