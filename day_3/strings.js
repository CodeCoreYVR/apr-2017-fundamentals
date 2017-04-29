alert("Inside strings.js");

let name = "Jacob";
name[0]; // "J"
name[4]; // "b"

name[2] = "k";

console.log(name);
// a string is a list of characters

// strings + arrays
let name = "Jacob";
let characters = ["J", "a", "c", "o", "b"];

name.split(); // returns an array
characters.join(); // return a string

// change my name
let name = "prince";

// this will split the name string into an array of
// individual characters
let characters = name.split("");

// once we have a character array, we can replace the first
// character on our list with a different letter "P"
characters[0] = "P";

// join allows up to glue all the items in our array together
// to produce a string once aagin
name = characters.join("");

// this is an example of splitting based on a character
// separator instead of splitting on every single character
let data = "An,Rod,Jacob";

let staff = data.split(",");
["An", "Rod", "Jacob"]

let staff = data.split("");
["A", "n", ",", "R", "o", "d"....]











//
