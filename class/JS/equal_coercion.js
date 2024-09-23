newFunction();   // true

function newFunction() {
    console.log(); // undefined

    console.log(1 == 1); // true
    console.log(1 == "1"); //true
    console.log(typeof (1 == "1")); // boolean

    console.log("" == 1); // false      "" this is considered 0

    console.log([] == ""); // true

    console.log([] == 0);
}

