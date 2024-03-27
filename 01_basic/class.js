// class : blueprint of the Object

class Animal {
  constructor(name,speaks){
    this.name = name;
    this.speaks = speaks;
  }

  introduce(){
    return this.name + " speaks " + this.speaks;
  }
}

let dog = new Animal("merry","bhow bhow");
const result = dog.introduce()
console.log(result);

let cat = new Animal("kajri","meow meow");
const result1 = cat.introduce()
console.log(result1);


// static method in javascript (class method) : can not be called on objects of class but on whole class

class Vehicle {
  constructor(model,type){
    this.model = model;
    this.type = type;
  }

  introduce(){
    return "This vehicle is of model " + this.model + " and of type " + this.type;            // this is normal instance method
  }

  static type(){
    console.log(this);                                                                        // class method( static method in javascript)
  }
}
  
let car = new Vehicle("Maruti Suzuki","SUV")
let result2 = car.introduce()

console.log(result2);

Vehicle.type();