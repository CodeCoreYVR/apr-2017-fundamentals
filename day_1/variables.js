// let and const are part of ES6
// Use `const` when you're expecting the varible not to change value stored
const greeting = 'Hello';

// Use `let` when you expect the variable to change the value stored
let name = 'Tam';
name = 'Jack'; // this changes the value of `name` to 'Jack'
// if you've defined a variable with `let`, you can change the value of it as
// you see in the line above 👆 but you can't define it again:
let name = 'John'; // this will throw an error (you can't re-declare)


// var is similar to let but there are some difference with scopring (which we
// will cover later). The rule of thumb is that you avoid using `var` if you're
// coding Javascript with ES6. `let` and `const` will acheive everything that
// `var` can with better scoping behaviour.
var city = 'Vancouver';
city = 'Burnaby';

// If you don't use `let`, `var` or `const` then the variable is considered
// a global variable (which should be avoided)
country = 'Canada';

name = name + ' Smith';


let x = 1;
// to increment x by 1, we can do one of the following:
x = x + 1;
x += 1;
x++;
++x;


let a = 1;
let b = a++;

const firstName = 'Rosa';
const lastName  = 'Diaz';
const fullName  = firstName + ' ' + lastName;
