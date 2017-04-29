// we define an object
const me = new Object();

// we can give an object properties using the dot operator
me.name = "Jacob";
me.age = 38;

console.log(me);
// { name: 'Jacob', age: 38 }

// objects contain property: value pairs

// object initializer
const me = {
  name: "Jacob",
  age: 38,
  favouriteBand: "The Smiths"
};


shoppingList[0]; // the first item in our shoppingList
me[0]; // ???
console.log( me.name ); // "Jacob"
console.log( me.age ); // 38
console.log( me.favouriteBand ); // "The Smiths"

// build me a car object, give it: make, model year properties
const car = new Object();
car.make = "Tesla";
car.model = "Model 3";
car.year = 2018;

const car = {
  make: "Honda",
  model: "CRV",
  year: 2015
};

console.log(car);
// { make: "Honda", model: "CRV", year: 2015 }
// car.selfDriving = true;


let me = {
  name: "Jacob",
  age: 38,
  favouriteColour: "blue"
}

me.favouriteFood = "lasagna";

// dynamic capabilities of object
me["favourite food"] = "pho";

let newProperty = "favourite person";
me[ newProperty ] = "Elon Musk";

let newProperty = "favourite person";
let newValue = "Elon Musk";

// evaluate the expression between the square brackets
// and then create the property
me[newProperty] = newValue;

// car
const car = new Object();
car.colour = "blue";
car.make = "Tesla";

const car = {
  colour: "blue",
  make: "Tesla"
};

car.tires = 17;

car["tires"] = 17;
car["sick tires"] = 17;

var newCarProperty = "spoiler";
car[ newCarProperty ] = true;
// car.spoiler = true;




//
