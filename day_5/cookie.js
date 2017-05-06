// this describes what a cookie should be made of
class Cookie {
  constructor(sugarAmount, flourAmount) {
    this.sugar = sugarAmount;
    this.flour = flourAmount;
  }
}

// inheritance
// class Oreo extends Cookie {
// }

//
// let oreo = new Object();
let oreo = new Cookie(10, 20);
oreo.filling = "vanilla";

let chocolateChip = new Cookie(20, 40);
chocolateChip.nuts = true;

console.log(chocolatChip);
