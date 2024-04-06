/*

Prototype:

In JavaScript, every object has a hidden internal property called [[Prototype]] (also known as __proto__ in some environments),
which references another object known as its prototype. When you access a property or method on an object, JavaScript looks for that property or method first in the object itself.
If it doesn't find it, it then looks up the prototype chain until it finds the property or reaches the end of the chain.


Prototype Chain:
The prototype chain is a series of linked objects where each object's prototype refers to the prototype of the next object in the chain.
This chain allows objects to inherit properties and methods from their prototypes.

Class Prototype:
Before ES6 introduced the class syntax for defining classes in JavaScript, developers often used constructor functions and prototypes to simulate class-based inheritance.

*/

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding methods to the prototype
Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

// Creating instances
var person1 = new Person("Alice", 30);
var person2 = new Person("Bob", 25);

// Accessing methods
person1.sayHello(); // Outputs: Hello, my name is Alice
person2.sayHello(); // Outputs: Hello, my name is Bob


/*

In this example:

We define a constructor function Person that initializes name and age properties.
We add a method sayHello to the prototype of Person.
Instances of Person (i.e., person1 and person2) inherit the sayHello method from the Person prototype.

*/


/*

ES6 class Syntax:
With ES6, JavaScript introduced a more familiar class syntax for defining classes, which internally still relies on prototypes.

Here's how the above example would look using the class syntax:

*/


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Hello, my name is " + this.name);
  }
}

// Creating instances
var person1 = new Person("Alice", 30);
var person2 = new Person("Bob", 25);

// Accessing methods
person1.sayHello(); // Outputs: Hello, my name is Alice
person2.sayHello(); // Outputs: Hello, my name is Bob


/*

In both examples, the sayHello method is attached to the prototype of the Person class, and instances of Person inherit this method. 
This is the essence of how "class prototypes" work in JavaScript.

*/