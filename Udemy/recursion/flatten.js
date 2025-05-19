var res = [];

var flat = function flatten(arr) {

    //var res =  arr[0].concat(flatten(arr.slice(1)));

    //return res;
  if (arr.length === 0) return res;
    
    if (arr[0]) res.push(arr[0]);
  

    return flatten(arr.slice(1)[0]);

}

console.log(flat([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]