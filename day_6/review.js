// good evening fundies!
// javascript - written in 10 days
// livescript - JAVA script

// JAVA compiled language

// JavaScript - ECMAScript 6

// functions + steroids
// higher-order functions - a function that takes in a function as an argument.
// a function that returns a function

// say hello 3 times
let sayHello = function() {
  console.log("Hello!");
};

let repeatThree = function( fn ) {
  fn(); // (); executes the function
  fn();
  fn();
};

repeatThree( sayHello );

// forEach
// forEach( array, fn );
//

let forEach = function(array, fn) {
  // for (let i=0; i<array.length; i++) {
  //
  // }
  let result = [];

  for (let element of array) {
    result.push( fn(element) );
  }

  return result;
};

console.log( forEach([1,2,3], squareIt) ); // [1, 4, 9]
//
// let squareIt = function( number ) {
//   // number ** 2;
//   return number * number;
// };
//
// squareIt( 10 );

// [1,4,9]

// built-in higher order function !?!??

// length - property
// numbers.length
//
// me.name
// me.age

// setTimeout
// timing functions
// setTimeout(function, delay);
// let doSomething = function() {};
// setTimeout(doSomething, );

let delay = 5000;

setTimeout(function(){
  console.log("This will display after 1 sec");
}, 5000);

let counter = 0;
let intervalId = setInterval(function() {
  console.log("This will continue to display every 1 sec");
  counter++;

  if (counter > 10) {
    clearInterval(intervalId);
  }
}, 1000 * counter);

let flying = function() {
  console.log("I am flying!");
};

// methods
let luigi = {
  name: "Luigi",
  age: 42,
  length: 110,
  jump: function(){
    console.log("I am jumping " + this.length + " cm.");
  },
  fly: flying
};

let mario = {
  name: "Mario",
  age: 42,
  length: 110,
  jump() {
    console.log("I am jumping " + this.length + " cm.");
  },
  fly: flying
};

mario.name; // "Mario"
mario.jump();

// counter with variable stepping

// classes - ???
class Cookie {
  constructor (sugar, flour, filling) {
    this.sugar = sugar;
    this.flour = flour;
    this.filling = filling;
  }
}

let oreo = new Cookie(10, 20, "vanilla");
let chocolateChip = new Cookie(4, 20, "vanilla");
let baby = new Cookie(1, 20, "vanilla");
let oatmeal = new Cookie(0, 20, "vanilla");
let peanut = new Cookie(5, 20, "vanilla");
let dogTreat = new Cookie(20, 20, "vanilla");

// let me = new Object();
// let numbers = new Array();

// spread
// [...myVariable]








//
