// scope: 


// 1.Global Scope: ->

// let a = "global scope";
// var b = "global scope";
// const c = "global scope";

// function scopeGlobal() {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// scopeGlobal();
// console.log(a);
// console.log(b);
// console.log(c);



// 2. Functional Scope: ->

let c = 50;
function calsum(a,b){

    let c = a + b;
    console.log(c);
}

calsum(5,2);