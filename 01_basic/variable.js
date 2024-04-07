//  Variable are memory containers where we store our Data.

// const is used to initialize constants, which means once initialized, they should not be changed.

const accountId = 111;
let accountName = "Priyanshu";
var accountEmail = "priyanshunigam1607@gmail.com";

// accountPassword; if no data is stored to any variable then it is undefined


console.log(accountId); 

console.table([accountId,accountEmail,accountName]);

/*

console.table() takes and array as argument and shows all the elements in tabular form.

let ans var both are used to define variables but there is a subtle difference between them, 

variable defined with keyword var have scope issue (block scope and functional scope) hence they are not used and instead of that let keyword is used to define the variable.

*/


/*

When to Use var, let, or const?

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers because of scope isSecureContext,(by default var scope is global, so once changed all values of that variable would be changed)




You can declare many variables in one statement.

Start the statement with let and separate the variables by comma:

let person = "John Doe", carName = "Volvo", price = 200;