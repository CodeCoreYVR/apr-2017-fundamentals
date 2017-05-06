// setTimeout(fn, delay);
let sayHello = function() {
  console.log("Hello!");
};

// asynchronous

// built-in higher order function, much like forEach, because it takes in a
// function as an argument

// event loop
// say hello after 1 second, 1000ms == 1 sec
setTimeout( sayHello, 1000 );

// blocking or waiting for the line of code above to finish?
console.log("how are you?");
//
// let counter = 0;
// while (true) {
//   console.log(counter);
//   counter++;
// }
