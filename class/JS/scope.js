// // scope: 


// // 1.Global Scope: ->

// // let a = "global scope";
// // var b = "global scope";
// // const c = "global scope";

// // function scopeGlobal() {
// //     console.log(a);
// //     console.log(b);
// //     console.log(c);
// // }

// // scopeGlobal();
// // console.log(a);
// // console.log(b);
// // console.log(c);



// // 2. Functional Scope: ->

// let sum = 50;                // global
// // let c = 50;
// function calsum(a,b){

//     let c = a + b;         // local     accessible only in brackets (curly)
//     console.log(c);
//     console.log(sum);
// }

// calsum(5,2);
// // console.log(c);





// // global :

// //let and const , we can just access in piece of block not outside.

// {
//     var t = 10;
//     let p = 30;

//     const y = 40;
// }

// console.log(t)

// console.log(p)  // nah

// console.log(y)  // nah





// lexical :

function outerFun() {

    let a = 10;
    // console.log(c);     // c not defined

    function innerfunc(){

        let b = 20;
        let c = a + b;

        // console.log(c);    // accessible
    }
    innerfunc();
    // console.log(c);      // c not defined
}
outerFun();