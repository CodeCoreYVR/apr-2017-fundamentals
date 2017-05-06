let add = function(x, y) { return x + y };
let subtract = function(x, y) { return x - y };
let multiply = function(x, y) { return x * y };
let divide = function(x, y) { return x / y };
let modulo = function(x, y) { return x % y };

let calc = function( fn, number1, number2 ) {
  return fn( number1, number2 );
};

// let calc = function( add, 10, 12 ) {
//   // add( 10, 12 );
//   // 22;
//   // return 22;
// };

console.log( calc( add, 10, 12 ) );
console.log( calc( subtract, 10, 12 ) );
console.log( calc( multiply, 10, 12 ) );
console.log( calc( divide, 10, 12 ) );
console.log( calc( modulo, 10, 12 ) );
