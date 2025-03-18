var areThereDuplicates = function duplicates(...args) {
//Rest 파라미터를 사용하면 가변 인자 함수의 인수 목록을 배열로 직접 전달 받을 수 있음
  console.log(args)
}

//areThereDuplicates(1, 2, 3) // false
//areThereDuplicates(1, 2, 2) // true 
//areThereDuplicates('a', 'b', 'c', 'a') // true 