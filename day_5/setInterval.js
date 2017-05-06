// setInterval is an example of a built in higher order function
// setInterval( fn, delay );

// repeats
let sayHello = function() {
  console.log("Hello!");
}

let id = setInterval( sayHello, 2000 );
clearInterval( id ); // this will stop a specific interval based on its ID

// say hello just 10 times

let counter = 0;

let id = setInterval( function() {
  let age = 38;
  console.log(`age inside: ${age}`);
  console.log( this );
  console.log("Hello!");
  counter++;

  if (counter >= 10) {
    clearInterval( id );
  }
}, 2000 );

//
console.log(`age outside: ${age}`);
