const person1 = {
    name: "Ankit" ,
    age: 19 ,
    desigination: "Developer" ,
};
console.log(person1);

const person2 = Object.create(person1);
const person3 = Object.create(person2);

console.log(person2);
console.log(person3);
console.log(person3.name);


person2.name = "vivek";

console.log(person2);
console.log(person3.name);

console.log(person2._proto_ == person1);
console.log(person1._proto_ == Object.prototype);
console.log(Object.prototype._proto_);


console.log(person3);

console.log(person3.hasOwnProperty("name"));
console.log(person2.hasOwnProperty("name"));
console.log(person1.hasOwnProperty("name"));

const num = 10;
console.log(num._proto_ == Number.prototype);

const arr = [1,2,3,4,];
console.log(arr._proto_ == Array.prototype);