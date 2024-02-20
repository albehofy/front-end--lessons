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
>**higher orer function:** is a function takes function as a parameter or return function or both of them.
- spread operator `console.log(...arr1)`
- rest operator `function hello(a, b, c, ...args)`
- array destructring `[x,y,z] = [1,2,4]` in this's case `x=1`, `y=2`, `z=4`.
- `mixin` takes place `interface` with implementation.
- `set()` did not accept any repeated types.
- `Map()`: thi's making collection holds key and value, add by `.set("key", "value")`, and getting value by `.get("key")`
- 