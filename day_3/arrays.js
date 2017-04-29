// array - indexed list of information
// window.alert("Inside arrays.js");

// we are defining a variable named shoppingList
// we are assigning to that variable an empty array
// we create empty arrays using the new keyword
// the new keyword constructs an instance of a class
// classes are by convention capitalized and delimited with
// a set of brackets
// don't your semi-colon

// grabbing a shopping cart
let shoppingList = new Array();

// this is how we add things to our shopping cart
// push is a method of the Array class
// push takes in as an argument a string, integer, array, boolean, object
shoppingList.push("milk", "chocolate"); // ???
shoppingList.push("bread");
shoppingList.push("cheese");
shoppingList.push("meat");
shoppingList.push("fish");
shoppingList.push("diapers");
shoppingList.push("beer");

// print out to the javascript console my shoppingList
console.log(shoppingList);

// remove an item from the end of my list
shoppingList.pop();

// start with an address of zero
// the address of 3 is actually the 4 item of the list
console.log( shoppingList[3] );

let suitcase = new Array();

// array initializer
let suitcase = [
  "suit",
  "gun",
  "drugs"
];

let suitcase = [ 'suit', "gun", `drugs` ];

suitcase[0];
suitcase[1] = "flowers";
suitcase[2] = "money";

console.log( suitcase );

let shoppingList = [ "bread", "yogurt", "fruit" ];
console.log(shoppingList.length); // 3

// array + loops ???
// for (let animal of zoo) {}
// for (let number of numbers) {}
// for (let name of names) {}

let suitcase = [ "suit", "flowers", "money" ];

for (let item of suitcase) {
  console.log(item);
}

let sales = [100.05, 20.22, 5.0, 1024.54];

let total = sales[0] + sales[1] + sales[2] + sales[3];

// this variable will hold the running total
let total = 0;

// we use a for..of loop to step through our list of sales
for (let sale of sales) {
  // we add the sale to the running total
  total = total + sale;
  // total += sale;
}

// for (let counter=0; counter<sales.length; counter++) {
//   total = total + sales[counter];
// }

console.log("The total sales for today are: " + total);
console.log(`The total sales for today are: ${ total }`);
console.log(`The total sales for today are: ${ 3 + 3 }`);

// 1149.81
// [stretch] do the same with a traditional for loop




//




//
