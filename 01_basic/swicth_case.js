// The switch statement is used to perform different actions based on different conditions.

// syntax

// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }


/*

This is how it works:

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.

*/


// Example


switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}



// Another example 

function getLetter(s) {
  let letter;

  switch (s.charAt(0)){
      case 'a':                                                     // here, case a,e,i,o,u share same block hence written like this
      case 'e':
      case 'i':
      case 'o':
      case 'u':
          letter = "A";
          break;

      case 'b':
      case 'c':
      case 'd':
      case 'f':
      case 'g':
          letter = "B";
          break;

      case 'h':
      case 'j':
      case 'k':
      case 'l':
      case 'm':
          letter = "C";
          break;

      default:                                                       // if none of the case mathces the expression then default case runs.
          letter = "D";
  }
  return letter;
}


console.log(getLetter('asdfg'))

