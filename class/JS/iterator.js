// for of:

// let str = "ANKIT";

// for(let i of str){
//     console.log(i);
// }





// for in:

let obj = {name: "Ankit" }

for(let i in obj){
    
    console.log(obj[Symbol.iterator]);
    console.log(obj[i]);
}