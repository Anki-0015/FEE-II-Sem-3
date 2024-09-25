// * create a array with a name cart with products (name,price, qty).
// Calculate the price of the all the product that we have added in the cart.

// var cart = [{ id: 1, name: 'iphone 16', price: 164000, qty : 2},
// 		{ id: 2, name: 'iphone 15', price: 84000, qty : 1},

// }]




// * write a function to filter out all the perfect square from given list
// of number:

// eg: [1,2,3,4,5,6,7,8,9,10,11,16,18,20,36,40,49];
// ans: [1,4,9,16,36,49]



// * user = ['Amit', 'Ajay','Mukesh'];

// Rewards = 1-10 Rs (random)
// listofUser = [
//  {id:1, name: 'Amit', reward:7 etc},
// {id:2, name: 'Ajay', reward:5 etc},
// {id:3, name: Deepak',reward:5 etc},
// ]




// * Find the veg menu list:
// const menu = [
//   "Kadai Paneer",
//   "Dal Makhni",
//   "Masala Dosa",
//   "Chicken Soup",
//   "Chicken Butter Masala",
//   "Veg Chowmein",
//   "Egg Curry",
//   "Egg Maggie",
//   "Chicken Fry",
//   "Chicken Biryani",
//   "Khichdi",
//   "Handi Paneer",
//   "Onion Paratha",
//   "Garlic Naan",
//   "Onion Pizza",
//   "Garlic Bread",
//   "Onion Rings",
//   "Chilli Paneer",
// ];






// Answer 1 : 

// var cart = [
//     { id: 1, name: 'iphone 16', price: 164000, qty: 2 },
//     { id: 2, name: 'iphone 15', price: 84000, qty: 1 }
//   ];

//   function calculateTotal(cart) {
//     let total = 0;
//     cart.forEach(product => {
//       total += product.price * product.qty;
//     });
//     return total;
//   }

//   console.log(calculateTotal(cart)); // Output: 412000






// Answer 2 : 

// function filterPerfectSquares(numbers) {
//     return numbers.filter(num => Number.isInteger(Math.sqrt(num)));
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 16, 18, 20, 36, 40, 49];
// console.log(filterPerfectSquares(numbers)); // Output: [1, 4, 9, 16, 36, 49]





// Answer 3 : 

// let users = ['Amit', 'Ajay', 'Mukesh'];
// let listOfUser = users.map((user, index) => ({
//   id: index + 1,
//   name: user,
//   reward: Math.floor(Math.random() * 10) + 1 // Random number between 1 and 10
// }));

// console.log(listOfUser);







// Answer 4:

const menu = [
    "Kadai Paneer",
    "Dal Makhni",
    "Masala Dosa",
    "Chicken Soup",
    "Chicken Butter Masala",
    "Veg Chowmein",
    "Egg Curry",
    "Egg Maggie",
    "Chicken Fry",
    "Chicken Biryani",
    "Khichdi",
    "Handi Paneer",
    "Onion Paratha",
    "Garlic Naan",
    "Onion Pizza",
    "Garlic Bread",
    "Onion Rings",
    "Chilli Paneer"
];

function getVegMenu(menu) {
    return menu.filter(item => !["Chicken", "Egg"].some(keyword => item.includes(keyword)));
}

console.log("Veg Menu List:", getVegMenu(menu));