// objects and arrays
let you = {
  name: "Jason",
  skills: "accountant"
};

you.skills = "JavaScript Developer";

let you = {
  name: "Jason",
  skills: [ "accountant", "JavaScript Developer" ]
};

// ??? HTML, CSS, Firebase

// push into our skills array: HTML, CSS, Firebase
let skills = ["accountant", "JavaScript Developer"];
skills.push("HTML");
skills.push("CSS");
skills.push("Firebase");


//

let you = {
  name: "Jason",
  skills: [ "accountant", "JavaScript Developer" ]
};

// object -> property -> array method
you.skills.push("HTML");
you.skills.push("CSS");
you.skills.push("Firebase");

// you.skills.push("HTML", "CSS", "Firebase");

// what is your name? and...
console.log("My name is " + you.name);
// how many skills do you have?
console.log(`I have ${you.skills.length} number of skills`);

// construct a car object with an array
// the array can be engine specs
// or it can be a list of added features, ie. heated seats, moon roof
const car = {
  make: "Tesla",
  model: "Model 3",
  year: 2018,
  features: ["heated seats", "power windows and locks", "air conditioning"]
};

// access the list and print it out the console
// try using a for loop to access the items on the list
// for..of used for arrays
// for..in used for objects

// tradition for - more flexibility, especially on iteration steps

for (let feature of car.features) {
  console.log(feature);
}
// [stretch] find out the total number of characters for all the words in the list
"Jacob".length; // 5
["heated seats", "power windows and locks", "ac"].length; // 3

let total = 0;

for (let feature of car.features) {
  total += feature.length;
}

console.log(total);







//
