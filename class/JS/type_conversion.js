console.log(10 + 2);    // output: 12

console.log(10 + "2");  // output: 102

console.log(typeof (10 + '2'));  // string

console.log(10 + true);  // 11

console.log(10 + false);   // 10

console.log(10 + null);   // 10

console.log(10 + undefined);   // NaN

console.log(10 + "A");   // 10A

console.log(10 - "A");   // NaN

console.log(10 + '2' - "A");   //NaN

console.log(10 - "2" + "A");   // 8A  


console.log("\n");  // string to number


let a = "20";
// let c = Number (a);
let d = parseInt (a);

// console.log(typeof a);
// console.log(typeof c);
console.log(typeof d);