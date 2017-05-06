// mapping - another use case higher order functions

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// mapping is squaring the original value

[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// 1. iterate over the array of numbers
// 2. apply the mapping function
// 3. return the resulting array

let results = [];

for (let number in numbers) {
  // number * number;
  results.push( number ** 2 );
}

console.log( results );

let square = function(number) {
  return number * number;
}

let addOne = function(number) {
  return number + 1;
}

let mapping = function( array, fn ) {
  let result = [];
  for (let element of array) {
    result.push( fn(element) );
  }
  return result;
}

mapping(numbers, square);
mapping(numbers, addOne);

let results = [];
["hello", "data", "eat cheese", "walking"].forEach( function(element){
  console.log(element);
  console.log(element.length);
  results.push(element.length);
});

console.log(results);

// word lengths is the mapping

[5, 4, 11, 7]

// 1. iterate over the array of words
// 2. apply the mapping function
// 3. return the resulting array
