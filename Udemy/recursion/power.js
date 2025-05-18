//control+option+N

var power = function powerFunc(base, exponent) {

    if (exponent === 0) return 1;

    return base * (  powerFunc(base, exponent - 1));
}

console.log(power(2, 4));