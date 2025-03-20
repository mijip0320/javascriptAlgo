var isSubsequence = function subsequence(str1, str2) {
  
    let j = 0;
    let i = 0;

    if (!str1) { console.log('true'); return; }

    while (j < str2.length) {
        if (str2[j] === str1[i]) i++
        if (i === str1.length) {
            console.log('true');
            return;
        }
        j++;
    }

    console.log('false');
 
}


// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)


// function isSubsequence(str1, str2) {
//   // good luck. Add any arguments you deem necessary.
//    let j = 0;
//     let i = 0;
    
//     if(!str1) return true;

//     while (j < str2.length) {
//         if (str2[j] === str1[i]) i++
//         if (i === str1.length) {
//            return true;
//         }
//         j++;
//     }

//     return false;
// }