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