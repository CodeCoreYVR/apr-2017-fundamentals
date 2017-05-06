// higher order functions in short form
let addOne = function( number ) {
  return number + 1;
};

addOne(10); // 11
addOne(1203948); // 1203949

let calc = function( fn, number ) {
  return fn( number );
};

calc( addOne, 10 ); // 11
calc( addOne, 1203948 ); // 1203949

calc(function( number ) { return number + 1 }, 10);

let sayHello = function() {
  console.log("Hello!");
};

let runThree = function( fn ) {
  fn();
  fn();
  fn();
};

runThree( function() { console.log("Hello!") } );
// we use the short form when we dont need to call this function again
// maybe it's a one off, so why store it in a variable?

// runThree( function() { console.log("Hello!") } );


//
