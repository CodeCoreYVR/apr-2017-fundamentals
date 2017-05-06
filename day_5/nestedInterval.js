let id = setInterval(function(){
  // game loop
  // where is the player
  // is he colliding with anything
  // any new points
  // redraw
  console.log("game loop");

  let id2 = setInterval(function(){
    console.log("animation frame");
    clearInterval(id);
  }, 500);

}, 1000);
