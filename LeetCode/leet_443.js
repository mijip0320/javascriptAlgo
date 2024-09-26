//https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75

//Approach : 
// 1)  in for loop, compare chars whether it was same with the one before
// 2) if it was same, count++, if it was not -> add to the result with chars and count, set count = 0
// 3) count for the next chars

//failed : 
// had to modify the input array

var compress = function(chars) {
    //let result = [];
    let read = 0;
    let write = 0;

    while (read < chars.length) {
        let current = chars[read];
        let count = 0;

        while (current === chars[read] && read < chars.length) {
            read++;
            count++;
        }

        chars[write] = current;
        write++;

        if (count > 1) {
              for (let digit of String(count)) {
                chars[write] = digit;
                write++;
            }
        }
    }
    console.log(write)
};

var compress2 = function(chars) {
    let write = 0;
    let read = 0;

    while (read < chars.length) {
        let char = chars[read];
        let count = 0;

        // Count the number of consecutive characters
        while (read < chars.length && chars[read] === char) {
            count++;
            read++;
        }
        chars[write] = char;
        write++;
        if (count > 1) {
            for (let digit of String(count)) {
                chars[write] = digit;
                write++;
            }
        }
    }

    //return write;

    console.log(chars)
};

let chars = ["a", "a", "b", "b", "c", "c", "c"];
//"a2b2c3"
compress2(chars);