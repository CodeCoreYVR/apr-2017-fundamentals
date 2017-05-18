// $(function(){
// });

$(document).ready(function(){
  // listen for every single keypress
  // in our text field
  // $('#email')
  $('input[type=email]').keypress(function(event){
    console.log(event.key);
  });

  $('input[type=password]').keypress(function(event){
    console.log(event.key);
  });

  // stop the submit action, and do something else....
  // $('form').submit(function(event){
  //   event.preventDefault();
  // });

  $('input[type=submit]').click(function(event){
    event.preventDefault();
    // add the email to the list of subscribers
    // i want to append the value of the email text field
    // to the ul below my form
    // grab the value sitting inside our text field
    // console.log( $('input[text=email]').val() );
    $('ul').append('<li>' + $('input[type=email]').val() +'</li>');
  });

  // event.preventDefault();
});





//
