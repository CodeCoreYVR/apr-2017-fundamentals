const age = parseInt(prompt('How old are you?'));

// prompt will always return a string to you which can work with comparisons but
// it's a good practice to parse it before comparing

// If is a statement that takes in an exprsesion (returns a value). Ideally the
// expression you give to the `if` must return `true` or `false`.
// - You can optionally put `else` statement that doesn't take a condition and
//   its code gets executed when the condition for the `if` is not met (false)
// - You can optionally add many `else if` blocks and if so then you must supply
//   a condition to them similar to the condition you pass to the `if`
// - Note that when one condition is met then the rest are skipped
if(age > 80) {
  alert('You are extra wise!');
} else if(age > 60) {
  alert('You are wise!');
} else {
  alert('You are young!');
}
