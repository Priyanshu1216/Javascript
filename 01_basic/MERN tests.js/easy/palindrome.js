/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let result = true;
  str = str.toUpperCase();
  const symbols =[' ',',','.','?','!'];
  let str1 = "";
  for (let i = 0; i < str.length; i++){
    if (symbols.includes(str[i])){
      continue;
    }
    else{
      str1 += str[i];
    }
  }
  newStr = str1.split('').reverse().join('')
  if (str1 == newStr){
    result = true;
  }
  else{
    result = false;
  }
  return result;
}

module.exports = isPalindrome;

