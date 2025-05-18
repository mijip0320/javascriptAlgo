var pal = function isPalindrome(str) {

    const rev = (str) => {

        if (str.length <= 1) return str;

        return rev(str.slice(1)) + str[0];

    }

    if (str === rev(str)) return true;
    else return false;
    
}

console.log(pal('tacocat'));