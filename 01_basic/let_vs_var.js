// let 

/*

The let keyword was introduced in ES6 (2015)

Variables declared with let have Block Scope

Variables declared with let must be Declared before use

Variables declared with let cannot be Redeclared in the same scope




Before ES6 (2015), JavaScript did not have Block Scope.

JavaScript had Global Scope and Function Scope.

ES6 introduced the two new JavaScript keywords: let and const.

These two keywords provided Block Scope in JavaScript:

Example
Variables declared inside a { } block cannot be accessed from outside the block:

{
  let x = 2;
}
// x can NOT be used here

*/




// va 



/*
Global Scope
Variables declared with the var always have Global Scope.

Variables declared with the var keyword can NOT have block scope:

// ---------------------------------------------------------------------------------------------------------

Variables defined with let can not be redeclared.

You can not accidentally redeclare a variable declared with let.

With let you can not do this:

let x = "John Doe";

let x = 0;


Variables defined with var can be redeclared.

With var you can do this:

var x = "John Doe";

var x = 0;
*/

// Hoisting 

// Meaning: You can use the variable before it is declared