// Objects are key value pair in Javascript.

// They are name indexed

function objectMethods(obj){
  console.log("Original object: ",obj);

  let keys = Object.keys(obj);          // Object.keys(obj) returns the array of keys in object
  console.log(keys);

  let values = Object.values(obj);      // Object.values(obj) returns the array of values in object
  console.log(values);

  let entries = Object.entries(obj);      // Object.entries(obj) returns the array of arrays which includes key and value of object
  console.log(entries);

  let prop = obj.hasOwnProperty("name");   // look for the given key in object and returns true or false based on outcome, (here it returns true)
  console.log(prop);

  let prop1 = obj.hasOwnProperty("gender");   // look for the gender key in object and returns false because property not found
  console.log(prop1);

  let newObj = Object.assign({}, obj, {gender: "male"});    // Object.assign() : takes three argument, first one is empty object, second is object in which new key-value pair is to be added and third argument is object with key-value pair(to be added)
  console.log(newObj);
}

const obj = {
  name: "Rashu",
  age: 23,
  profession: "Software engineer",
}

objectMethods(obj);