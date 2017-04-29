// functions make you run
// bodily functions
// series of steps
// sequence of events
// index list of instructions
// repeat, reuse
// mathematical functions
// perform a work task

// synonyms for the word function: routine, method

// morning routine

// MONDAY
// wake up
// drink room temperature water
// read for 10 minutes
// take a shower
// eat breakfast
// go to work

// TUESDAY
// wake up
// drink room temperature water
// read for 10 minutes
// take a shower
// eat breakfast
// go to work

// WEDNESDAY
// wake up
// drink room temperature water
// read for 10 minutes
// take a shower
// eat breakfast
// go to work

// THURSDAY
// wake up
// drink room temperature water
// read for 10 minutes
// take a shower
// eat breakfast
// go to work

// FRIDAY
// wake up
// drink room temperature water
// read for 10 minutes
// take a shower
// eat breakfast
// go to work

// make a morning routine function
// let
// const
// keyword function, function name, round brackets, curly brackets
function morning() {
  console.log("---")
  console.log("wake up");
  console.log("drink room temperature water");
  console.log("read for 10 minutes");
  console.log("take a shower");
  console.log("eat breakfast");
  console.log("go to work");
  console.log("---")
}

// MONDAY
// to call the function we use the function name followed by ();
morning();

// TUESDAY
morning();

// WEDNESDAY
morning();

// THURSDAY
morning();

// FRIDAY
morning();

//
// good morning tom
// good morning Jacob
// how was your weekend?
// it was great, yours?
// it was great
// how about that rain
// have a good one
// ciao

// pass in an argument
function greet(name) {
  console.log(`Hi ${name}!`);
}

greet('Tom');
greet('Margaret');
greet('Lucas');
greet('Jen');
greet('Travis');

// mathematics
function addOne(number) {
  console.log(number + 1);
}

addOne(1); // 2
addOne(29039240394); // 29039240395

// why do we use console.log, who is it there for?
// developer

// user?
window.alert( addOne(1) );
document.write( greet("Albert") );

// return - allows us to return someting meaningful to our user
function greet(name) {
  console.log(`Hi ${name}`);
}

function greet(name) {
  return `Hi ${name}`;
}

greet("Tom"); // will return a string
alert( greet("Tom") );
alert( `Hi Tom` );

function addOne(number) {
  console.log( number + 1);
}

addOne(42); // 43 printing in our console

function addOne(number) {
  return number + 1;
}

addOne(24601); // i get nothing....
console.log( addOne(24601) );
alert( addOne(24601) );
document.write( addOne(24601) );

// me[ addOne(24601) ] = "blue";

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

add(5, 6); // 11
subtract(10, 2); // 8
multiply(3, 4); // 12
divide(12, 3); // 4

// function declaration - move the function into the global namespace
function greet(name) {
  return `Hi ${name}`;
}

greet("Tom");

// function expression - allow us to control the scope of our function
let greet = function(name) {
  return `Hi ${name}`;
};

let name = "Jacob";
// anonymous function - a function that has no name
// function () {}

// function declaration - move the function into the global namespace
function greet(name) {
  return `Hi ${name}`;
}

let greet = function(name) {
  return `Hi ${name}`;
};

greet("Jane");

// write a function that takes a string and a number
// it should log out to the console the take string
// repeated the number of times specified.

// function repeat(string, number) {
//   string.repeat(number);
// }

function repeat(string, number) {
  for (let i=0; i<number; i++) {
    console.log(string);
  }
}

let repeat = function(string, number) {
  for (let i=0; i<number; i++) {
    console.log(string);
  }
};

repeat("Jacob", 5);

// console.log("Jacob");
// console.log("Jacob");
// console.log("Jacob");
// console.log("Jacob");
// console.log("Jacob");


//
