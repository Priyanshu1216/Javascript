// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.



// Length : to get the lenght of the string


function getLength(str) {
  return str.length;
}

console.log(getLength("Priyanshu x aditi"));


// indexOf : to get the starting index of substring in any string, if found, return the starting index of substr and if not found it returns -1

function getIndexOf(str,substr){
  return str.indexOf(substr);
}

console.log(getIndexOf("Hello this is priyanshu" ,"priyanshu"));
console.log(getIndexOf("Hello this is priyanshu" ,"lol"));
