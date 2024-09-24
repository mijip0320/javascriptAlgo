//https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75

var gcdOfStrings = function (str1, str2) {
   // handle the base case
    if (str1 + str2 !== str2 + str1) return '';
    let a = str1.length
    let b = str2.length

    // loop (divide) until you find the 
    // highest common factor (length of string)
    // like we did in maths
    
    // for (let i = 0; i < b; i++){
    //        let temp = i
    //     b = a % i
    //     a = temp
    // }
    while (b) {
        
        let temp = b
        b = a % b
        a = temp

        console.log(b)
    }
    console.log(str1.substring(0, a));
  
};

gcdOfStrings('ABCABC','ABC')

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"