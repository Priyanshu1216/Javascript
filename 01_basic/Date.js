/*
Objective

In this challenge, we learn about JavaScript Dates. Check out the attached tutorial for more details.

Task

Given a date string, , in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.

Input Format

Locked stub code in the editor reads the following input from stdin:
The first line contains an integer, , denoting the number of dates to check.
Each line  of the  subsequent lines contains a date in MM/DD/YYYY format; each date denotes some  that is passed to the function.

Constraints

It is guaranteed that the input only consists of valid dates.
Output Format

The function must return a string denoting the day of the week corresponding to the date denoted by .

Sample Input 0

2
10/11/2009
11/10/2010
Sample Output 0

Sunday
Wednesday

*/

function getDayName(dateString) {
  let dayName;
  // Write your code here
  dayName = new Date(dateString).getDay()
  switch (dayName){
    case 0:
        return "Sunday";
        break;
    case 1:
        return "Monday";
        break;
    case 2:
        return "Tuesday";
        break;
    case 3:
        return "Wednesday";
        break;
    case 4:
        return "Thursday";
        break;
    case 5:
        return "Friday";
        break;
    case 6:
        return "Saturday";
        break;
  }
  return dayName;
}