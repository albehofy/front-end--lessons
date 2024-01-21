# javaScript Builtin Objects
> we have many built-in objrcts in js 
- String
- Number
- Array
- Date
- Math

## String()
### methods of String object
- <code>charAt</code>: return the character inde in string
- <code>indexOf</code>: return index of character</li>
- <code>lastIndexOf</code>: return the last place of the chracter index of character
- <code>subString(start,end)</code>: return the letters fromthe start to the end if the end 
- <code>concat(string)</code>: add new string to the old string and the feature of using concat is adding space before a string

## Number()
### methods of String object
- <code>MAX_VALUE</code>: return constant value (maimum allowed number)
- <code>MIN_VALUE</code>: return the smallest number you can work with in js
- <code>NaN</code>: contains not a number number
- <code>POSITIVE_INFINITY</code>: contains the inifinty numbers "read only" 
- <code>NEGATIVE_INFINITY</code>: has the value  infinity 
- <code>toFixed(n)</code> return n of numbers after the the (.) sign like 2.foxed(6) = 2.000000 
- <code>toPrecision(n)</code> format any numbers with length of n 2.303.toExponential(6) = 2.30300 
- <code>toExponential()</code> Exponential notation of the number object as a string, rounds the returnde value, 56789.toExponential(2) = 5.68e+4 
- <code>toString()</code> converts from decimal system to any other system when passing it's base as a parameter, or converting nmber into a string when thi's method with no params 

## Math (Static class)
### methods of Math Object
- <code>random()</code> retuen random number from 0 to 10 
- <code>round()</code> return integer number after rounded the number for the nearest decimal number
- <code>floar()</code>return decimal number after rounded the number for the lower number

## Boolean
### methods of Boolean Object
- <code>new Boolean(x)</code> return false if x is "'', 0, null, false, NaN,empty" and will return true other wise

## Date()
- <code>new Date()</code> new date of the my pc date
- <code>new Date("date ad a string")</code> new date frim the string attr
- <code>new Date(year, month, day, hours, minutes, seconds, milliseconds)</code> new date frim the string attr

### methods<code>getDate()</code>erturn  day of the month
- <code>getMonth()</code> return month
- <code>getDay()</code> return day (sunday = 0)
- <code>getHours()</code> return hours
- <code>getMinutes()</code> return minutes
- <code>getSeconds()</code> return seconds
- <code>getTime()</code> return time
- <code>toUTCString()</code> return Date as a string
- <code>toLocalString()</code> return full Date as a string by defualt of your PC
- <code>toLocalDateString()</code> return  Date(yy-mm-dd) as a string by defualt of your PC

## Array()  
### property of Array object
 - <code>length</code> return width of array
### Methods of Array object
- <code>concat(array)</code> return string of array1 + array2
- <code>join(array)</code> return string of array1 + array2 sepertaed by a comma
- <code>reverse()</code> return all elements of arraya as reversed elements
- <code>push(element)</code> add element to the end of the array return length od the array
- <code>unshift(element)</code> add element to the begining of the array return length od the array
- <code>pop()</code> remove the last element of the array and return the removed element
- <code>shift(element)</code> remove the first element of the array and return the removed element
- <code>slice(index)</code> return all item of the array from index to the length of the array
- <code>sort()</code>sort array elements as a alphapetic == arrange the elements depends on the ascii code.
> we can used the "string value as an indx of the elements in the array" like: 
```
let arr1 = []; 
arr1["mohamed"]= 7000;
arr1["john"]= 6500; 
```
>**NOTE:** we can loop through this type of arrays by (for ... in ..) loop 

## Additional Resources
- [Link to Resource 1](https://example.com/resource1)
- [Link to Resource 2](https://example.com/resource2)
