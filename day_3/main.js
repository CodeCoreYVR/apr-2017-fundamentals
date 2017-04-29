// will print out a message to the javascript console
// used for developers
console.log("Hello Developer!");

// create some javascript that will write to not only the
// console, but to the document as well.

// will create content between the body tag
// typically, it's used to render information to our user
let name = "Jacob";
// string concatenation - glue strings together
document.write("<h1>Hello" + name + "</h1>");
// string interpolation - ``, injecting a string from a variable
document.write(`<h1>Hello ${name} </h1>`);

// dialog - alert, confirm, prompt
// console - javascript console
// document - document section of our browser, content area between body
// window - outside of the browser, OS level

// the keyword "window" is optional
window.alert("I am a popup!");
alert("I am also a popup!");

let answer = window.confirm("Are you a programmer?");
let favouriteBand = window.prompt("What is your favourite band?");


document.write(`<h1>Are they a programmer? ${answer} </h1>`);
document.write(`<h1>Who is their favourite band? ${favouriteBand} </h1>`);
