// higher order functions - take in a function as an argument
// or return a function

// function sayHello() {
//   console.log("hello");
// }

let sayHello = function() {
  console.log("hello");
}

let sayGoodbye = function() {
  console.log("ciao");
}

function runThree( fn ) {
  fn();
  fn();
  fn();
}

runThree( sayHello );
runThree( sayGoodbye );

// runThree( sayHello() );

// calculator
let add = function(x, y) {
  return x + y;
};

let subtract = function(x, y) {
  return x - y;
}

let displayZero = function() {
  // console.log("0");
  return 0;
};

let calc = function( fn ) {
  return fn();
}

let display = function (val) {
  console.log( val );
  // document.write( val );
  // render onto an led strip
}

display( calc( displayZero ) );












//
