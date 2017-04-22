while(true) {
  var luckyNumber = parseInt(prompt('guess a number'));
  if(luckyNumber === 13) {
    console.log('You guessed it!');
    break;
  }
}



let x = 1;

while(x <= 10) {
  console.log('hello!🤘');
  if(x === 4) {
    break; // this will stop the loop early
  }
  x++;
}
