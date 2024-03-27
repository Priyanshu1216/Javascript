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