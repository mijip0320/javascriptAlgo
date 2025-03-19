var areThereDuplicates = function duplicates(...args) {
//Rest 파라미터를 사용하면 가변 인자 함수의 인수 목록을 배열로 직접 전달 받을 수 있음
 
 
  let count = {};

  for (let i = 0; i < args.length; i++){
    let letter = args[i];
    if (count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }
  //console.log(Object.values(count));
  
  if (Object.values(count).filter((el) => el !== 1).length > 0) {
    console.log('true')
  } else {
    console.log('false')
  }

}

//areThereDuplicates(1, 2, 3) // false
//areThereDuplicates(1, 2, 2) // true 
//areThereDuplicates('a', 'b', 'c', 'a') // true 