// good morning fundamentals!!

// iterating over objects

// object initializer
const me = {
  name: "Jacob",
  age: 38
};

// constructing an instance of an object from the object class
// const me = new Object();

me.name; // dot operator
me.age;
// me[expression goes here]
me["name"]; // square bracket object accessor
me["age"];

let property1 = "name";
let property2 = "age";

me[property1]; // "Jacob"
me[property2]; // 38

// therefore
// for ( of ) // arrays
// for ( in ) // objects
for (let property in me) {
  console.log(property);
}

for (let property in me) {
  console.log(property); // gives us the property name
  console.log(me[property]); // gives us the corresponding value for our property
}

// indexOf
// let alphabet = ["a", "b", "c"];
//
// 0: "a",
// 1: "b",
// 2: "c"
//
// what is the address of "a", -> index of zero

// using objects a hashes
// key: value
let lyric = "your mother should know";
// which letter occurs most often

// pseudo code
// i need to divide my string into individual characters
// then i can iterate over those individual characters
// then i can categorize like characters together
// let characters = ["y", "o", "u", "r", " ", "m", "o"....];
let characters = lyric.split(""); // this may include white space?!?!?
// console.log(characters);
// console.log(characters.length);

const occurrences = {};

for (let char of characters) {
  console.log(char);

  // hash
  // occurrences.y
  // occurrences.o
  // occurrences.u
  // occurrences.r
  if (isNaN(occurrences[char])) {
    occurrences[char] = 1;
  } else {
    // it has already been defined
    occurrences[char] += 1;
  }
}

console.log(occurrences);

// temperature converter
// C to F
// how do you find out the datatype of input
// isArray

// const me = {
//   name: "Jacob",
//   // name: "Tim",
//   // name: "Bob",
//   age: 38,
//   favouriteFood: "butter chicken"
// };
//
// me.name = "Tim";
// me.name = "Bob";
// me.favouriteFood = "pho";
// me.favouriteFood = "butter chicken";


// decaying counters
// timing functions
// count 0 to 10
// it takes one sec to count to 1
// it takes 2 secs to count to 2
// it takes 6 secs to count to 3


// 3 lanes

setTimeout(function(){
  console.log("runner 1 has finished");
}, 1000);

setTimeout(function(){
  console.log("runner 2 has finished");
}, 3000);

setTimeout(function(){
  console.log("runner 3 has finished");
}, 6000);

setTimeout(function(){
  console.log("runner 4 has finished");
}, 10000);

setTimeout(function(){
  console.log("runner 5 has finished");
}, 15000);

console.time("decaying count");
let delay = 1000;

for (let i=0; i<10; i++) {
  setTimeout(function(){
    console.log(`runner ${i} has finished`);
  }, i * (i+1) / 2 * delay);
}
console.timeEnd("decaying count");

// recursive solution
let counter = 0;
let delayCount = function() {
  if (counter >= 10) {
    return;
  }

  counter++;
  console.log(counter);
  let timeOut = setTimeout(delayCount, counter * 1000);
};







//
