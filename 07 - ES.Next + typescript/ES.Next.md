# ES.Next
used for descriping what's next javaScript Version
- **Scope Declaration:**  
    adding block scope by using `let`, `const` for making global varibale in the parent og this's variable, not like the `var` which is global in the window

- `var` is hoisted and can be accessed before intialization, in the other side `let`, `const` are hoisted but can't be accessed before intialization.
-  `use strict` prevent some javaScript issues one of them adding or using un intialized avriable
- function default parameter
- for...of
- string literal ``` ` hello this's string literals ${5+4}  ` ``` 
- `class` keyword (Special Function) and this's keyword behind the seen translated to function.
```
<!-- class decleration -->
class Person {
    contructor(name, age) {
        this.name = name; 
        this.age = age; 
    }
    
    data (){
        console.log(`this's ${this.name}, age ${this.age}`)    
    }
}

<!-- class expression -->
const Person = class {
    contructor(name, age) {
        this.name = name; 
        this.age = age; 
    }

    data (){
        console.log(`this's ${this.name}, age ${this.age}`)    
    }
}


let p1 = new Person('Mohamed', 25)
```
- `extends` for enhiretance with `super()`
```
class student extends Person{
    constructor(name, age, level){
        super(name, age); 
        this.level = level; 
    }

    <!-- overwrite Data Function -->
    data() {
        console.log(`this's ${this.name}, age ${this.age}, level ${this.level}`)
    }

    PsersonData(){
        super.data();
    }
}
 
let st1 = new Student()
```
- getter `get` making user getting data from function as a properity not as a function
- setter `set` making user set data from function as a properity not as a function
- using `#` before variable name for creating private variable
- arrow function `()=>{}` "when adding `this` this's returns for the paretn"
>**Higher orer function:** is a function takes function as a parameter or return function or both of them.
- spread operator `console.log(...arr1)`
- rest operator `function hello(a, b, c, ...args)`
- array destructring `[x,y,z] = [1,2,4]` in this's case `x=1`, `y=2`, `z=4`.
- `mixin` takes place `interface` with implementation.
- `set()` did not accept any repeated types.
- `Map()`: thi's making collection holds key and value, add by `.set("key", "value")`, and getting value by `.get("key")`
- async 
- callback

- Promise 

**Example**
```
//Creating promise
function getSomething(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(req.statusText);
            }
        };
        // Handle network errors
        //req.onerror = function() {
        //	reject(Error("Network Error"));
        //};

        // Make the request
        req.send();
    });
}
//calling promise
//getSomething('https://reqres.in/api/products/1');
//code here will be executed before ajax call 

getSomething('https://reqres.in/api/products/1')
    .then(function(response) {
            console.log("Success!", response);
        }, function(error) {
            console.error("Failed!", error);
    });
```
- “Callback Hell” 
**Problem And Solution:**
In asynchronous code execution, which is simply execution of 
code in any order, sometimes it is common to have numerous levels 
of callback functions to the extent that you have code that looks like 
the following. The messy code below is called callback hell because of
the difficulty of following the code due to the many callbacks. 

**Here are two solutions to this problem:**
1-Name your functions and declare them and pass just the name of 
the function as the callback, instead of defining an anonymous 
function in the parameter of the main function.
2-Modularity: Separate your code into modules, so you can export 
a section of code that does a particular job. 
Then you can import that module into your larger application.

- implicit promise
```
chainingPromises()
    .then((msg) => {
        console.log(msg);
        return "Good morning"; //Implicit promise (resolve)
    })
    .then((msg) => {
        console.log(msg);
        return "Good afternoon";
    })
    .then((msg) => {
        console.log(msg);
        return "Good evening";
    })
    .then((msg) => {
        console.log(msg);
        console.log("Task Finished");
    });
```
- explicit promise
```
function chainingPromises() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log("Chaining tasks started!");
            resolve("Chaining tasks started!");
            if (false) {
                reject();
            }
        }, 3000)
    });
};

chainingPromises()
    .then((msg) => {
        console.log(msg);
        return new Promise((resolve, reject) => { //Explicit
            setTimeout(() => {
                resolve("Good morning");
            }, 2000);
        });
    }, () => {
        console.log("error"); //will stop chaining
    })
    .then((msg) => {
        console.log(msg);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Good afternoon");
            }, 2000);
        });
    })
    .then((msg) => {
        console.log(msg);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Good evenning");
            }, 2000);
        });
    })
    .then((msg) => {
        console.log(msg);
        console.log("Task Finished");
    });
```
- promise.all
```
Promise.all([
new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)), // 1
new Promise((resolve, reject) => setTimeout(() => resolve(2), 3000)), // 2
new Promise((resolve, reject) => setTimeout(() => resolve(3), 2000)) // 3
]).then((values) => {
    console.log("Testing promise.all");
    console.log(values);
}); // 1,2,3 when promises are ready: each promise contributes an array member
```
- async .. await
`asyn` return promise, `await` used inside async function 
- fetch ajax by promise
```
let url='https://reqres.in/api/products';
fetch(url, {method:'GET'})
    .then((res)=>{
        return res.json();
    })
    .then((resJson)=>{
        console.log(resJson.data[0]);
    })
```
- 