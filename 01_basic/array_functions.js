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


// toString : changes array to String

function changeToString(arr){
  console.log(arr);
  const newStr = arr.toString();
  console.log(newStr);
  console.log(typeof newStr);
}

let arr8 = [1,2,3,5]
changeToString(arr8);


// The Difference Between Arrays and Objects

// In JavaScript, arrays use numbered indexes while objects use named indexes.


// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// How to create array in JS

// we can create like this


// const points = new Array(); example: const points = new Array(40, 100, 1);
// const points = [1,2,43];




// second largest

/*

Numeric Sort
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:

*/

// Exmple of compare function

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});


// compare function

/*

The Compare Function
The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:

function(a, b){return a - b}
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative, a is sorted before b.

If the result is positive, b is sorted before a.

If the result is 0, no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

You can use this code snippet to experiment with numerically and alphabetically sorting:

*/

function getSecondLargest(nums) {
  let secMax;
  let sortedArr = nums.sort((a,b) => a-b);
  // console.log(sortedArr);
  for (let i = sortedArr.length - 1; i >= 0; i--){
      if (sortedArr[i] > sortedArr[i-1]){
          secMax = sortedArr[i-1];
          break;
      }
  }
  return secMax;
}   

console.log(getSecondLargest([2,3,6,6,5]));