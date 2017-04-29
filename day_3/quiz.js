// this is quiz.js

// ask the user a question
// Q. When did Columbus discover America?
//
// A. 1492
let answer = window.prompt("When did Columbus discover America?");
if (answer == 1492) {
  // write to the document if they were correct
  document.write("You are correct!  It is indeed 1492.");
} else {
  // write to the document if they were incorrect
  document.write("You are incorrect.  Please try again.");
}
// if they got it wrong how can we ask
// the question again?

// bring up the prompt again, use a while loop

// what if we had more than 1 question for our quiz
// how would you structure it

// use logic gating, if... else...
// array of questions, array of answers
// create a function that ask the questions


// one dimensional array - there is only one address to retrieve information
let questions = [
  "When did Columbus discover America?",
  "How many countries are there in the Americas?",
  "How large is the land mass?"
];

let answers = [
  1492,
  "Lots",
  "1200 sqft"
];

// multi-dimensional array, you may need multiple addresses to retrieve info
let quiz = [
  questions,
  answers
];

let quiz = [
  [
    "When did Columbus discover America?",
    "How many countries are there in the Americas?",
    "How large is the land mass?"
  ],
  [
    1492,
    "Lots",
    "1200 sqft"
  ]
];

quiz[0]; // will give a list of questions
quiz[0][0]; // this will give us the first question

let quiz = [
  [ "When did Columbus discover America?", 1492 ],
  [ "How many countries?", "Lots" ],
  [ "How large is the land mass?", "1200 sqft" ]
];



//
