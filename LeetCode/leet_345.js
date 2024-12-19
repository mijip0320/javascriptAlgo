//https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75

//Approach : 
// 1) list up vowels in string s and the index 
// 2) reverse the index 
// 3) when making new string, put the vowel in the index place

//reverseVowels failed last tc
// - time limit exceeded

//modified :
//use reverse and include to reduce time

//시간초과
var reverseVowels = function (s) {
    let result = Array.from(s);
    let res = "";
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let vowelList = []; 
    let indexes = [];
    //1
        for (let i = 0; i < s.length; i++) {
            for (let j = 0; j < vowels.length; j++){
                if (s[i] === vowels[j]) {
                    vowelList.push({ vowel: vowels[j], index: vowelList.length + 1 });
                    indexes.push(i);
                }
            }
        }
     

    //2
    if (vowelList.length > 0) {
        //indexes.sort((x, y) => y > x ? 1 : -1)
        vowelList.sort((x, y) => y.index > x.index ? 1 : -1)
        vowelList.map((v, i) => v.index = indexes[i])
          //  console.log(indexes);
        //  console.log(vowelList);
        
        
        //3
        for (let i = 0; i < result.length; i++){
          for (let j = 0; j < vowelList.length; j++){
              if (vowelList[j].index === i) {
                  result[i] = vowelList[j].vowel;
                  //result = result.slice(0, vowelList[j].index) + vowelList[j].vowel + result.slice(vowelList[j].index + 1)
                
                }
            } 
            
            res += result[i];
        }

      
    }
   
    console.log(res);
};


var reverseVowels2 = function(s) {
    const vowels = 'aAeEiIoOuU';
    let vow = ""; //vowels that are included in s
    let i = 0;
    let revStr = '';

    for (let c of s) {
        if (vowels.includes(c)) {
    
            vow += c;
        }
    }

    //reverse
    vow = vow.split('').reverse().join('')
    for (let char of s) {
        if (vowels.includes(char)) {
            revStr += vow[i] //add vowel to revStr
            i++
        } else {
            revStr += char //add character to revStr
        }
    }
    console.log(revStr)
};

//reverseVowels2(s)
const s = 'leetcode'
//e, e, o, e 
//leotcede
reverseVowels2(s)
