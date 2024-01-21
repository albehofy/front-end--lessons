# javaScript Builtin Functions

##  Dialog Boxes

1. <code>alert</code>: showing essgae for the user and will stop the page loading and will working after user making a decesion with this's alert
2. <code>prompt</code>: like alert in showing messgae for the user and also will stop loading of the page and will working after user making a decesion too but the diffrence in this's methdo prompt taking a value as a question and asking user to input answer.
3. <code>confirm</code>: like prompt but in this's way asking user for a true or false answer if okay this's means true else means flase.

<!-- >notes : for note -->
<!-- - **Note:** Another note for Sub-Subsection B. -->

## Conversion Function 

### 2. parseInt()
convirting Number Into integer Value, For Example: 
- parseInt("3a");  //3
- parseInt("a3");  //NaN
### 3. parseFloat() 
Convirsting Value into Decimal Value, For Example, 
- parseFloat("3.55a"); //3.55
- parseInt("a3.55"); //NaN
### 3. number()
converting Value into a number and will return NaN if it's founded string in the Value, For Example, 
- number(false);    //0
- number("767");   //767
- number("3 23"); //NaN
### 4. string()
convirting value into string value, For Example, 
- string(01092232) // "01092232"

## Functions For Checking
### 1. isFinite(number)
checking if the value is number or not if the value is a number in this's case the function will return true, For Example, 
- isInfinite(120) // true
- isInfinite("120") // false
- isInfinite("asd") // false
### 2. inNan(value)
checking if the value is not a number  if the value is a number in this's case will return flase, For Example, 
- isNan(120) // false
- isInfinite("120") // true
- isInfinite("asd") // true
### 3. eval(expresion)
in this case eval function will taking the expression and converting into a code and return  the result of the expression.

## Errors in javaScript
For showing error looking at the console
1. **Syntax Error** : The page will stop working becouse we having a error in writing the syntax
2. **HTML Error** : Error in writing html tags
3. **Runtime Error** : Page will still working but and the code is working in good way but we will getting an error from the user input, we can solve this's error by making validat on the input which will coming from the user.
4. **Logical Error** : This's is defficult type of errors,becouse the error in this's case in the logic of how to handling data and we having un expected result, <br> for solving the problem with the logicl error we using debug for start debug going to debugger in dev tools or writting <code>debugger</code> in avaScript file, debug will helping to showing code line by line and this's making it's easy to finding erors
### Testing Functions
- **Console** : For logging data console like lert but console dont  stop working of the page.
## Additional Resources

- [Link to Resource 1](https://example.com/resource1)
- [Link to Resource 2](https://example.com/resource2)
