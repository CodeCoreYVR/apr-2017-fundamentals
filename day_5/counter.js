const counter = {
  count: 0,
  step: 1,
  set(n) { this.count = n },
  setStep(n) { this.step = n },
  inc() { this.count += this.step },
  dec() { this.count -= this.step },
  now() { return this.count },
  reset() {
    this.count = 0;
    this.step = 1;
  }
};

counter.setStep(2);
counter.inc(); // 2
counter.inc(); // 4
counter.setStep(10);
counter.dec(); // -6
counter.reset(); // 0


// counter.count; // 0
console.log( counter.now() ); //0
counter.set(100);
counter.dec();
counter.dec();
counter.dec();
console.log( counter.now() ); //?
counter.inc();
counter.dec();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
console.log( counter.now() ); //?
// counter.count; // 100
