//https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75

//Approach : 
//1) split s to words
//2 ) reverse
//3) make it to string again

var reverseWords = function (s) {
    let revStr = "";

    const splitString = s.split(' ').reverse().filter((el) => el !== "");
    //console.log(splitString)
    for (let i = 0; i < splitString.length; i++){
        if (i !== 0) {
            revStr += ' ' + splitString[i];

        } else {
            revStr += splitString[0]
        }
    }

    console.log(revStr)
};

const s = 'a good   example';
reverseWords(s);