var averagePair = function pair(arr, num) {
    if (arr.length === 0) console.log('false');

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let average = (arr[start] + arr[end]) / 2;
        if (average === num) {
            console.log('true');
            return;
        } else {
            if (average < num) start++;
            else end--;
        }
    }
    console.log('false');
}

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false