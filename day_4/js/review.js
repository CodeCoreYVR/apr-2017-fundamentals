// good evening fundamentals!
//
5 + 5; // this is an expression, it expresses itself as the value 10
let sum = 5 + 5; // sum is a variable, a name reference to a piece of memory,
// that can hold information
// persistance - to persist

// data-type: array. it is an index list of information
let numbers = [10, 20];

// construct an instance of the Array class
let numbers = new Array();
numbers.push(10);
numbers.push(20);

// in our console our arrays look like so:
// 0: 10
// 1: 20

let shoppingList = ["milk", "eggs", "bread"];

// 0: "milk"
// 1: "eggs"
// 2: "bread"

// one - dimensional arrays, because we only need one address to access the data

let tictactoe = [0,0,0,0,0,0,0,0,0];  // 1 dimensional array

let row1 = [0, 0, 0];
let row2 = [0, 0, 0];
let row3 = [0, 0, 0];
let tictactoe = [row1, row2, row3]; // 2 dimensional array

let tictactoe = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

// accessing arrays
console.log( shoppingList[0] ); // "milk"
console.log( shoppingList.length ); // can i go through the express lane? yes, only 3 items

// accessing multi-dimensional array
let tictactoe = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

// rows, columns -> 2 pieces of info to access the data

// tictactoe[0] <- this will return row #1
// tictactoe[row?][col?];
tictactoe[1][1] = "X";

console.log( tictactoe );

// objects - are the fundamental building blocks behind any meaningful code
const human = {};
const human = new Object();

// objects contain properties
const human = {
  bones: true,
  hairColour: "black",
  personality: "snob",
  gender: "male",
  language: "English",
  age: 38,
  hobbies: ["parkour", "bjj", "coding"]
};

// dot operator
human.eyeColour = "brown";
human["special power"] = "flying";
human[3 + 3] = 6;
let newProperty = "greeting";
human[newProperty] = "hello";

delete human.age;


// iteration
// use the for..of to iterate over an array
let numbers = [42, 5, 8];

for (let number of numbers) {
  console.log(number);
  // 42 the first time through
  // 5 the second time through
  // 8 the third time through
}

for (let i=0; i<numbers.length; i++) {
  console.log(numbers[i]);
}

// use the for..in to iterate over an object
for (let property in human) {
  console.log(property); // this gives us the property stored in a variable
  // "bones" the first time through
  // "hairColour" the second time through
  // "personality" the third time through

  console.log( human[property] ); // this gives you the value associated with a property
  // true, the first time through
  // "black", the second time through
  // "snob", the third time through

  // human.bones;
  // human["bones"];
  // human["special powers"];
  //
  // let searchedProperty = "bones";
  // human[searchedProperty];
}


// functions - a list of instructions that we may want to execute over and over
// and over again.
function morning() {
  console.log("wake up");
  console.log("eat breakfast");
  console.log("shower");
  console.log("catch bus");
  console.log("code");
}

// monday
morning();
// tuesday
morning();
// wednesday
morning();
// thursday
morning();
// friday();
morning();

// one purpose of a function is to reduce redundancy in our code

function addOne(number) {
  return number + 1;
}

console.log( addOne(10) );

let result = addOne(10);

function add(x, y) {
  return x + y;
}

console.log( add(10, 2) ); // 12

let result = add(10, 2);

function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
function modulo(x, y) {
  return x % y;
}

// function declartion - this goes into the global name space
function greeting(name) {
  console.log(`Hello ${name}`);
}

greeting("Jacob");

// function expression - we can have control over the scope of this function
let greeting = function(name) {
  console.log(`Hello ${name}`);
};

greeting("Jacob");











//
