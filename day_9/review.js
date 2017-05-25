// good evening fundamentals!

// review
//
// web applications (dynamic)
// web site (static)

// data, 0 1

// programming language
// html
// css
// javascript

// simple data structures
const PI = 3.14159;

let name = "Jacob";
name = "Prince";

// complex data structures
// array
let numbers = [55, 67, 33, 98];

// object
const product = {
  // properties: values;
  name: "Pool Salt",
  price: 30,
  description: "Salt for a pool."
};

// functions
function sayHello() {

}

let sayHello = function() {};


// higher-order function
let calc = function( operation, number1, number2 ){

};

calc(add, 5, 6); // 11
calc(multiply, 5, 6); // 30

// timing functions
// mapping
// for each

// jQuery
// events
$('button').click(function(){
  // call back function
  // handler function

});

// data structure + behaviour
let mario = {
  name: "Mario",
  age: 40,
  jump: function(){}, // method
  duck() {}
};

// $('input[id=first-name]').keypress(function(event){
$('#first-name').keypress(function(event){
  console.log("A key was pressed!");
  console.log(event.key);
  // event.which
  // event.keyCode
});

$('#form-1').submit(function(event){
  // what do you do when this form is submitted?
  event.preventDefault();
  // send it to my hacking server
});

// html
// RESTful api
// REpresentational State Transfer
// GET POST P??? DELETE
<form id="form-1" action="" method="POST">
  <input type="submit">
</form>








//




//
