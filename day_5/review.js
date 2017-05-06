// good morning fundamentals!!!

// review javascript
0 1
000
001
011
010

// javascript an interpreted language
// java is a compiled language
5 + 5;
-> 10

// we provide input
// the machine provides output

// memory - persist
let name = "Jacob";
let age = 38;

// data structure
// arrays, objects
let shoppingList = ["milk", "bread"];
// 0: "milk"
// 1: "bread"

shoppingList[0]; // milk

// object-oriented programming
// OOP
// objects are the basis of anything meaningful in programming
// javascript supports OOP (object-oriented programming)
let car = {
  make: "Tesla",
  model: "Model3",
  capacity: 5,
  features: ["AC", "Keyless Entry", "Heated Seats"]
};

// objects have the ability to get and set properties dynamically
car.spoiler = true;
console.log( car.make ); // Tesla

car["self driving"] = true;
// car.self driving <- this will throw an error
let newProperty = "self parking";
car[newProperty] = true;

// for..of // to iterate through an arrays
// for..in // to iterate through an object

for (let property in car) {
  console.log( property );
  console.log( car[property] ); // this will log out the corresponding value
  // associated with that specific property
}

// functions - mathematics
// calculator
function sayHello() {
  console.log( "hello" );
}

sayHello();

function add(5, 4) {
  return 5 + 4;
}

add(5, 4);
console.log( add(5, 4) ); // log to console 9
alert( add(5, 4) ); // create a popup with 9 inside

// function declaration or declarative function
function subtract() {}
function multiply() {}
function divide() {}

// function expression
// anonymous functions
function () {}
// how do you call a function that has no name????
function frost() {} // <- creates frost in the global name space
let frost = function() {}; // <- allows more control of where we want this
// function to be called

frost();
frost();
// scope

// create an object with properties.  the value should be the length of the
// string of the property name.
let name = "Jacob";
let nameLength = 5; // 5 characters

const me = {
  name: "Jacob"
};

const wordLengths = {
  hello: 5,
  codecore: 8,
  doppleganger: 12,
  supercalifragilistic: 20
};

// input
// 1. ask the user for a sentence
let sentence = prompt("Please enter a sentence: ");
// "god only knows"
// 2. take that sentence, split it into individual words,
// store it in a datastructure
let words = sentence.split(" "); // this will split a space separated sentence into an a
// array words
// 0: "god"
// 1: "only"
// 2: "knows"
// ["god", "only", "knows"];

// 3. iterate over that data structure and create the resulting object where
// the property is the word, and the value is the length of that word
const wordLengths = {};
// wordLengths.god = 3;
// wordLengths["god"] = 3;
// let word = "god";
// // "god" == ["g", "o", "d"]
// wordLengths[ word ] = word.length;

for (let word of words) {
  wordLengths[word] = word.length;
}

// output
// {
//   god: 3,
//   only: 4,
//   knows: 5
// }


 // object in the form of a hash
// what is a hash? #tag #twitter
// hash == dictionary
// pulp - p'ul,p, a wet mass of paper.
// fiction - f'ic't,ion, a made up piece of literature
// hash, zip codes

// "happy birthday to you"
// what is the most recurring letter in this song lyric

// 1. ask the user for a song lyric
// 2. take that song lyric and remove all the spaces
// 3. sort the characters into a hash

let characters = "happy".split("");
// ["h", "a", "p", "p", "y"]

const hash = {};
let highest = 0;

for (let character of characters) {
  hash[character] += 1;

  // king of the hill
  if (hash[character] > highest) {
    // then it becomes the highest
    highest = hash[character];
  }
}

// output to the browser window "The most recurring letter is: ???"
{
  "h": 1,
  "a": 1,
  "p": 2,
  "y": 1
}

// iterate through your object and find out which character has the highest
// value

// [1, 1, 2, 1].sort(); [1, 1, 1, 2];







 //
