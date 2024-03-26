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


// lastIndexOf : return the starting of last substring in string and returns -1 if not found

function getlastIndexof(str, substr){
  return str.lastIndexOf(substr);
}

console.log(getlastIndexof("priyanshu is a good very good boy", "good"));
console.log(getlastIndexof("priyanshu is a good very good boy", "girl"));


// slice : it slices the string from given starting index to until given last index (last index excluded)

function sliceStr(str,start,end){
  return str.slice(start,end);
}

console.log(sliceStr("Priyanshu",2,5));

// substring : it slices out the string from start index to length of end index (not used in newer version of  js)

function substr(str,start,end){
  return str.substring(start,end);
}

console.log(substr("Priyanshu",2,7));

// replace : replaces a subtring in string to new substr and returns existing string if string to be replaced is not found

function replaceStr(str,substr,newsSubStr){
  return str.replace(substr,newsSubStr)
}

console.log(replaceStr("Priyanshu is a good boy", "good", "very good"));


// split : it splits the string to array of elements by dividing through seperator, for example(comma,space,under_score,hyphen)

function splitStr(str,divider){
  return str.split(divider);
}

let str = "Priyannshu is a handsome boy"
console.log(splitStr(str," ")); //here divider or sepator is space between

let str1 = "Priyannshu,is,a,handsome,boy"
console.log(splitStr(str1,",")); //here divider or sepator is space between

let str2 = "Priyannshu-is-a-handsome boy"
console.log(splitStr(str2,"-")); //here divider or sepator is space between



// trim : trims out the space from staring and beginning of a string 

function trimStr(str){
  return str.trim();
}

console.log(trimStr("       priyanshu     hello    "));

