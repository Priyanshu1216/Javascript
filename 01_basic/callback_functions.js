// Callback functions

// Calling function inside another function is basically cancelIdleCallback.

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