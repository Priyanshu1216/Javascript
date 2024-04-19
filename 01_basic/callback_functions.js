// Callback functions

// Calling function inside another function is basically called Callback.

// Example -

function square(n){
  return n*n;
}

function takeinput() {
  let num = "9";
  num = Number(num);

  return square(num);             // here calling square() funstion inside takeinput() function is callback
}

console.log(takeinput());


// Example 2

function square1(n){
  return n*n;
}

function cube(n){
  return n*n*n;
}

function findSomething(a,b,callback){
  let a1 = callback(a);
  let b1 = callback(b);

  return a1 + b1;
}


console.log(findSomething(2,3,square1));
console.log(findSomething(2,3,cube));


// More Examples-

function FindsSqrt(n){
  return Math.sqrt(n);
}

function FindCbrt(n){
  return Math.cbrt(n);
}

function FindRoot(n,fn){
  let root = fn(n);
  return root;
}

console.log(FindRoot(9,FindsSqrt));             // Example of callback functions




