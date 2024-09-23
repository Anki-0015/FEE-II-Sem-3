// // global execution context

// var a = 10;

// function sum(a,b){
//     return a + b;

//     function c() {
//         let d = 10;
//         console.log(d);
//     }
//     c()
// }

// sum(5,3);





// console.log(a);  // undefined
// var a = 10;      // if you declare with let and const the upper zone will be declared as dead, so it will show error
// b();

// function b() {  
//     console.log(c);
//     var c = 20;
//     console.log(c);
// }





function printName(names, num){
    for(let i = 1; i <= num; i--){
        names();
    }
}

let myName = function () {
    console.log("Ankit");
};
names();

printName(myName, 19);