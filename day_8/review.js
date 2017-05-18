// good evening fundamentals!
// jQuery - what is jQuery?
// DOM - Document Object Model

// document.getElementsByTagName('h1');
// $ - selector
// $('h1');
// $('div') takes in as an argument a string,
// which represents a CSS selector

// event handler - is the document ready yet? has it finished loading?
// ready is an example of a higher-order function.
// callback function is the argument
// event handler function
$(document).ready(function(){
  // instructions
  // what do you want happen when the document has loaded
  $('h1').html('Jacob Tran');

  // mouseenter is an example of a higher-order function
  // it is an event handler
  $('tr').mouseenter(function(){
    // $('tr').addClass('highlight');
    $(this).addClass('highlight');
    // $(this).toggleClass('highlight');
  });

  $('tr').mouseleave(function(){
    $(this).removeClass('highlight');
    // $(this).toggleClass('highlight');
    // toggleClass will check if the class is already there,
    // if it is, it will remove it. if it is not, it will add it.
    // $(this).toggleClass('highlight');
  });

  // forms
  
});






//
