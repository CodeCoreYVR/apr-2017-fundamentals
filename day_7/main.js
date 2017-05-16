// good morning fundamentals!
// ready is a higher order function
$(document).ready(function() {

  // all the code you want to execute after the page has loaded
  // should sit here

  // $ == selector / css selector
  // console.log( $('h1') ); // this will select all h1 tags on the page
  // document.getElementsByTagName("h1"); // vanilla js

  // $('h1').html('Jacob Tran');
  //
  // // let h1s = document.getElementsByTagName("h1");
  // // for (let i=0; i<h1s.length; i++) {
  // //   h1s.innerHTML = "Jacob Tran";
  // // }
  //
  // $("*"); // selects all
  // $('h1'); // selects by tag name
  // $(`.highlight`); // selects a class
  // $('#my-h1'); // selects an id
  //
  // // exercises
  // $('.shape');
  // $('.shape.black');
  // $('.shape').length;
  // $('.shape.black').length;
  // $('.shape.blue, .shape.black').length;
  // $('h1');
  // $('.small.circle');
  //
  // // <a href="http://www.google.com">Google</a>
  // $('a').attr('href'); // "http://www.google.com"
  // $('a').attr('href', 'http://www.reddit.com');
  //
  //
  // // css
  // .highlight {
  //   background-color: yellow;
  // }
  //
  // // html
  // <a href="http://www.google.com" class="highlight">Google</a>
  //
  // // jquery
  // $('a').attr('class', 'highlight');
  // $('a').addClass('highlight');
  // $('a').addClass('rosa');
  //
  //
  // // html
  // // <a href="google.com" class="highlight rosa"></a>
  //
  // // css
  // // .highlight.rosa {} // selects elements that have both classes
  // // ul li {
  // //
  // // }
  // // .highlight, .rosa {} // selects anything with the highlight class,
  // // then selects every with the rosa class
  //
  // // $(document).ready(function(){});
  // // $(function(){});
  //
  // $('#orange-container .shape').remove();
  // $('#orange-container').children().remove();
  //
  // // <div class="small red circle shape"></div>
  // $('.small.red.circle.shape').remove();
  // $('.small.red.circle').remove();
  //
  // // <button id="reset">Reset</button>
  // $('button');
  // $('#reset');
  // $('button#reset').html();
  //
  // // <h1>Shapes</h1>
  // $('h1').html('Jacob is cool');
  //
  // <div id="purple-container" class="container">
  //   <div class="medium black square shape"></div>
  //   <div class="large blue square shape"></div>
  //   <div class="medium red circle shape"></div>
  // </div>
  //
  // $('#purple-container').children();
  // // $('div#purple-container')
  //
  // $(".large.grey.diamond.shape").eq(1).parent();
  // $(".red.diamond").parent();
  //
  // <ul>
  //   <li><a href="http://www.google.com">Google</li>
  //   <li>Hello</li>
  // </ul>
  //
  // $('li');// this will select all the list items
  // $('li a'); // this will select a list item with anchor tags
  //
  // $('a').parent('li');
  //
  // // <div id="green-container" style="display: block;"></div>
  // // $('#reset').on('click', function(){});
  //
  //
  // // callback function or a handler function
  // $('h1').mouseenter(function(){
  //   // console.log("An H1 was clicked");
  //   $('.shape').slideUp(1000);
  // });
  //
  //
  // $('.shape').click(function(){
  //   console.log('shape was clicked');
  // });
  //
  // $('.blue.circle').mouseenter(function(){
  //   console.log("you are entering a blue circle.");
  // });
  // $('.blue.circle').mouseleave(function(){
  //   console.log("goodbye");
  // });
  //
  // $('tr').mouseenter(function(){
  //   $(this).addClass('highlight');
  // });
  // $('tr').mouseleave(function(){
  //   $(this).removeClass('highlight');
  // });

  // $(document)
  // $(this)

  // password hacker
  $('input[type=password]').keypress(function(event) { console.log(event.keyCode); console.log(event.key); });

  let x = 0;
  $(document).keypress(function(event){
    if (event.key == "w") { // up
      $('#rocket').css('top', x-10);
    } else if (event.key == "s") {
      $('#rocket').css('top', x+10;)
    }
  });

}); // when the page has finished loading

// let isReady = function() {};
// $(document).ready( isReady );
