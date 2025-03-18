var sameFrequency = function frequency(num1, num2) {
    if (num1.length !== num2.length) {
        console.log('false');
        return;
    }

    num1 = num1.toString().split('').sort().join('');
    num2 = num2.toString().split('').sort().join('');

    if (num1 === num2) {
        console.log('true');
    } else {
         console.log('false');
    }
}

// sameFrequency(182,281) // true
 sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false