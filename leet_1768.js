//https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
var mergeAlternately = function(word1, word2) {
    if (word1 !== '' && word2 !== '') {
        let result = "";
        for (let i = 0; i < word1.length; i++){
            //console.log(word1[i]);
            result += word1[i];
            if(word2[i])result += word2[i];
        }

        if (word2.length > word1.length) {
            let leftovers = word2.substring(word1.length, word2.length);
            result += leftovers;
        }  
        console.log( result)
        
    }
};

mergeAlternately('abcd', 'pq')

//alternative answer
let result = '';
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
  }
  return result;