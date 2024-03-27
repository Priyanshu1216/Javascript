// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()


// push : append element to end of the array

function pushElement(arr,ele) {
   arr.push(ele);
   console.log(arr);
}

let arr = [1,2,3,4]
let ele = 5
pushElement(arr,ele);


// pop : removes the last element of the Array and assign to variable if used as assignment.
function popElement(arr){
  arr.pop();
  console.log(arr);
}

let arr1 = [1,2,3,4]

popElement(arr1);


// shift : removes element from starting of the array. (opposite of pop)

function shiftElement(arr,ele){
  console.log(arr);
  arr.shift();
  console.log(arr);
}

let arr2 = ['a',1,'b',2.0]
shiftElement(arr2);


// unshift : add element to the starting of the array. i.e at 0th index

function unshiftElement(arr,ele){
  console.log("before usnshift" + " " + arr);
  arr.unshift(ele);
  console.log("after unshift" + " " + arr);
}

let arr3 = [1,2,3,4]
unshiftElement(arr3,5);


/* slice : The slice() method slices out a piece of an array into a new array
The slice() method creates a new array.
The slice() method does not remove any elements from the source array.
*/


function sliceArr(arr){
  console.log(arr);
  const newArr = arr.slice(5);
  console.log(arr);
  console.log(newArr);
}

let arr4 = [1,2,3,4,5,6,7,8,9,10]

sliceArr(arr4);


//  Splice:

// The splice() method adds new items to an array.

// the first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:


function spliceArr(arr,start,num_of_items_to_delete, items_to_add){
  console.log(arr);
  arr.splice(start,num_of_items_to_delete,items_to_add);        // here, it will put new item to spicified postion and removes the items(number of items to delete)
  console.log(arr);
}

let arr5 = [1,2,3,4,5,6]
let start = 2
let num_of_items_to_delete = 2
let items_to_add = "hello"

spliceArr(arr5,start,num_of_items_to_delete,items_to_add);


// concat : merges the given arraya and return newly merged array

function mergeArr(arr,newArr){
  console.log(arr);
  const merged_array = arr.concat(newArr);
  console.log(arr);
  console.log(merged_array);
}

let arr6 = [1,2,3]
let newArr1 = ['a','b','c']
mergeArr(arr6,newArr1);



// At : find element of array at given position, similar to doing arr[position]

function findElement(arr,position){
  console.log(arr.at(position));
}

const arr7 = [9,8,7,6,5,4,3,2,1]
let position = 4

findElement(arr7,position);