class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// we are creating an instance of the array class. we are storing that object into
// a variable called number.
let number = new Array();

let me = new Human("Jacob", 38);

// let me {
//   name: "Jacob",
//   age: 38
// };

let albert = new Human("Albert", 40);
let reg = new Human("Reg", 39);
let jen = new Human("Jen", 18);


// let car = {
//   make: "Tesla"
// };
// or the other

function Human() {
  this.name = "Jacob";
  this.age = 38;
}

let me = new Human();

function Human(name, age) {
  this.name = name;
  this.age = age;
}

let me = new Human("Jacob", 38);





//
