// for each
// for loop, higher order function, data structure
function addOne( number ) {
  return number + 1;
}

addOne(10); // 11

// input
// [10, 20, 234];

// 1. check the data type, we know it's an array
// isArray?
// .class
let numbers = [10, 20, 234];
// 2. loop through the array, get each individual value
for (let number of numbers) {
  console.log( number );
}

// 3. create a second array to store the resulting values
let results = [];

// 4. run the add one function on each of those items
for (let number of numbers) {
  console.log( number );
  console.log( addOne(number) );
  // populate the resulting array
  results.push( addOne(number) );
}
// 5. print out the resulting array
console.log( results );
// [11, 21, 235]

// output
// [11, 21, 235]
// calc( array, fn );

// what would calc look like
let calc = function( array, fn ) {
  let result = [];

  for (let element of array) {
    result.push( fn( element ) );
  }

  return result;
};

calc( [10,20,234], addOne );

// we have written a built-in higher order javascript function called forEach
[10, 20, 234].forEach( addOne );






 //
