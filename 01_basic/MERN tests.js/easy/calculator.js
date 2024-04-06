/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result =  0;
  }

  add(n){
    this.result += n;
  }

  subtract(n){
    this.result -= n;
  }

  multiply(n){
    this.result *= n;
  }

  divide(n){
    if ( n == 0){
      throw new Error();
    }
    else{
      this.result /= n;
    }
  }

  clear(){
    this.result = 0;
  }

  getResult(){
    return this.result;
  }
  
  calculate(expression) {
    // Remove extra spaces and split the expression into tokens
    const tokens = expression.replace(/\s+/g, "").match(/[\d.]+|[+\-*/()]/g);

    // Evaluate the expression using a stack-based approach
    const stack = [];
    const operators = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
    };

    for (const token of tokens) {
      if (/\d/.test(token)) {
        stack.push(parseFloat(token));
      } else if (token in operators) {
        const b = stack.pop();
        const a = stack.pop();
        stack.push(operators[token](a, b));
      } else {
        throw new Error("Invalid input expression.");
      }
    }

    // The final result will be at the top of the stack
    this.result = stack.pop();
  }
}

module.exports = Calculator;
