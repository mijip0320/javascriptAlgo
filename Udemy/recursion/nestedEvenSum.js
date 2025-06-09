var sum = 0;
var nested = function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
  const keys = Object.keys(obj);
  if (keys.length === 1) {
    if (obj[keys[0]] % 2 === 0) {
      sum += obj[keys[0]];
      return sum;
    }
  }

  const recursion = (obj) => {
    for (let i = 0; i < keys.length; i++) {
      var val = obj[keys[i]];
      if (Number.isInteger(val) && val % 2 === 0) sum += val;
      else recursion(val);
    }
  };

  return;
};

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nested(obj1); // 6
console.log(sum);
// console.log(nested(obj2)); // 10
