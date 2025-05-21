var capitalize = function capitalizeFirst (arr) {
    
    var newArr = [];

    const recursive = (word) => {
        var str = "";
        for (let i = 0; i < word.length; i++){
            if (i === 0) str += word[0].charAt(0).toUpperCase();
            else str += word[i];
        }

        return str;
    }

    for (let i = 0; i < arr.length; i++){
        //arr[i] = arr[i].charAt(0).toUpperCase();
        newArr = newArr.concat(recursive(arr[i]));
        

    }

    return newArr;
    
}
  
console.log(capitalize(['car','taco','banana']))// ['Car','Taco','Banana']