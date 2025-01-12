/**
 * https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * 
 * Input: s = "abc", t = "ahbgdc"
Output: true

Input: s = "axc", t = "ahbgdc"
Output: false

 */
var isSubsequence = function (s, t) {
    let res = false;
    const isBool = new Array(s.length).fill(false);
    let i = 0;
    t.split('').map((c1, index) => {
       // console.log("c1", c1)
      //  console.log('isBool', isBool)
        if (s.split('')[i] === c1) {
        //    console.log("s.split('')[i]", s.split('')[i]);
        //    console.log("c1" , c1)
            isBool[i] = true;
            i++
         }
    })
    
    if (isBool.filter(c => c === false).length === 0) {
        res = true;
    }

    console.log('res', res);
};

const s = "abc";
const t = "ahbgdc"
isSubsequence(s, t);