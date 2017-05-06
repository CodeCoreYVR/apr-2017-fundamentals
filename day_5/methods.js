let yearsLived = 40;
let flying = function() {
  console.log("I'm flying");
};

let mario = {
  name: "Mario",
  age: yearsLived,
  hobbies: ["plumbing", "saving princesses", "eat pizza", "mushrooms"],
  jump: function(height) {
    console.log(`I'm jumping ${height} ft!!!`);
  },
  fly: flying,
  // we can get rid of the ": function"
  // this is the preferred syntax
  shoot() {
    console.log("firing!");
  }
};

mario.name; // "Mario"
mario.age; // 40
mario.hobbies.length; // 4
mario.hobbies[0]; // "plumbing"
mario.jump(2);
mario.jump(10);
mario.jump(2);
mario.jump(2);
mario.jump(2);
mario.jump(10);
mario.fly();
mario.shoot();
// mario.jump; // <- this will return a pointer to the function, but not execute it

let shoppingList = new Array();
shoppingList.push("milk"); // array methods
shoppingList.pop(); // array methods
shoppingList.length; // is a value, it is a property of the array object





//
