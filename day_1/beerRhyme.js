// THE SOLUTION
for(let i = 100; i >= 1; i--) {
  console.log(`${i} bottles of beer on the wall
               ${i} bottles of beer
               take one down, pass it around. ${i - 1} bottles of beer on the wall`);
}


// ADVANCED SOLUTION (with bottle / bottles)
function printOut(number) {
  if(number === 1) {
    return 'bottle';
  } else {
    return 'bottles';
  }
}

for(let i = 100; i >= 1; i--) {
  console.log(`${i} ${printOut(i)} of beer on the wall
               ${i} ${printOut(i)} of beer
               take one down, pass it around. ${i - 1} ${printOut(i - 1)} of beer on the wall`);
}
