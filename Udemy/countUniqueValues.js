//control+option+N

// var countUnique = function countUniqueValues(param) {
//     param = param.sort();
//     let countArray = [];

//     if (param.length == 0) {
//     console.log('countUniqueValues :: ',0)
//     } else {
//          for (let a of param){
//         if (countArray.length === 0) {
//             countArray.push(a);
//         } else if (countArray[countArray.length - 1] !== a){
             
//                 countArray.push(a)
            
//         }
        
        
//     }

//     console.log('countUniqueValues :: ', countArray.length)
//     }
   
// }

// countUnique([-4, -7, -2, 0, -23])


var countUnique2 = function CountUnique2(param) {
    let i = 0;
    if (param.length === 0) {
        console.log(0)
    } else {
        for (let j = 1; j < param.length; j++){
            if (param[i] !== param[j]) {
                i++;
                param[i] = param[j];
                
            }
        }

        console.log('i :: ', i+1);
    }

  

}

countUnique2([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]);