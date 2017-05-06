let driving = function() {
  console.log( this );
  console.log("I am driving at: " + this.maxSpeed);
};

const auto = {
  make: "Tesla",
  model: "Model 3",
  maxSpeed: 240,
  park: function() { console.log("Parking!!!") },
  stop() { return "Stopping!" },
  drive: driving
};

// console.log( car.maxSpeed ); // 240
// car.park(); // logs to the console a message
// car.stop(); // this returns a string
// alert( car.stop() ); // this returns a string
auto.drive();
// what is this?????
// where are we???
