function mathMethods(value) {
  console.log("Original Value:", value);

  let rounded = Math.round(value);                    // round : round off the value to nearest integer
  console.log("After round():", rounded);

  let ceiling = Math.ceil(value);                     // ceil : give upper value
  console.log("After ceil():", ceiling);

  let flooring = Math.floor(value);                   // floor : gives lower value
  console.log("After floor():", flooring);

  let randomValue = Math.random();                    // random : generates random number between 0 and 1
  console.log("After random():", randomValue);

  let maxValue = Math.max(5, 10, 15);                 // max : gives maximum
  console.log("After max():", maxValue);

  let minValue = Math.min(5, 10, 15);                 // min : gives minimum
  console.log("After min():", minValue);

  let powerOfTwo = Math.pow(value, 2);                // pow : gives power of value
  console.log("After pow():", powerOfTwo);

  let squareRoot = Math.sqrt(value);                  // sqrt : gives square root of value
  console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods

mathMethods(4.56);
mathMethods(9);
mathMethods(25);
