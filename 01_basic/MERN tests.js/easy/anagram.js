/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// function isAnagram(str1, str2) {
//   result = true;
//   str1 = str1.toUpperCase()
//   str2 = str2.toUpperCase()
//   if (str1.length == str2.length){
//     for (let i = 0; i < str1.length; i++){
//       if (str2.includes(str1[i])){
//         result = true;
//       }
//       else {
//          return false;
//       }
//     }
//   }
//   else {
//     result = false;
//   }
//   return result;
// }

// or 

function  isAnagram(str1, str2){
  let result = true;
  str1 = str1.toUpperCase().split('');
  str2 = str2.toUpperCase().split('');
  // console.log(str1);
  // console.log(str2);

  if(str1.length == str2.length){
    for (let i = 0; i < str1.length; i++){
      if (str2.includes(str1[i])){
        result = true;
      }
      else{
        result = false;
        break;
      }
    }
  }
  else{
    result = false;
  }
  return result;
}

module.exports = isAnagram;
