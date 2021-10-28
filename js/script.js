// Task #1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

//Task #2
const arr = [1, 2, 3];
arr.reverse();
console.log(arr);

//Task #3
const array3 = [1, 2, 3];
array3.push(4, 5, 6);
console.log(array3);

// Task #4

const array4 = [1, 2, 3];
array4.unshift(4, 5, 6);
console.log(array4);

//Task #5

const array5 = ['js', 'css', 'jq'];
const firstArrEl = array5.shift();
console.log(firstArrEl);

//Task #6
 const array6 = ['js', 'css', 'jq'];
 const lastArrEl = array6.pop();
 console.log(lastArrEl);


//Task #7
const array7 = [1, 2, 3, 4, 5];
const newArr = array7.slice(0, 3);
console.log(newArr);

//Task #8
const array8 = [1, 2, 3, 4, 5];
const newArray = array8.slice(-2);
console.log(newArray);

//Task #9
 const arr9 = [1, 2, 3, 4, 5];
 arr9.splice(1, 2);
 console.log(arr9);

//Task #10
 const arr10 = [1, 2, 3, 4, 5];
 arr10.splice(0, 1);
 arr10.splice(arr10.length-1, 1);
 console.log(arr10);

//Task #11
 const arr11 = [1, 2, 3, 4, 5];
 arr11.splice(3, 0, `a`, `b`, `c`);
 console.log(arr11);

//Task #12
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, `a`, `b`);
arr12.splice(6, 0, `c`);
arr12.splice(arr12.length, 0, `e`);

console.log(arr12);

//Task #13
const arr13 = [3, 4, 1, 2, 7];
arr13.sort();
console.log(arr13);

//Task #14
/*const arr14 = [5, 6, 7, 8, 9];
let result = arr14.reduce((sum, current) => sum + current, 0);
console.log(result);

//Task #15
const arr15 = [5, 6, 7, 8, 9];
const result = arr15.map(x => x ** 2);
console.log(result);

//Task #16
const arr16 = [1,-3, 5, 6,-7, 8, 9,-11];
const result = arr16.filter(item => item < 0);
console.log (result);

//Task #17
 const arr17 = [1,-3, 5, 6,-7, 8, 9,-11];
 const result = arr17.filter(item => item % 2 === 0);
 console.log(result);

//Task #18
 const arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const result = arr18.filter(item => item.length > 5);
 console.log(result);

//Task #19
const arr19 = [1, 2, [3, 4], 5, [6, 7]];
const result = arr19.filter(item => Array.isArray(item));
console.log(result);

//Task #20
const arr20 = [5,-3, 6,-5, 0,-7, 8, 9];
const result = arr20.filter(item => item < 0);
console.log(result.length);*/









