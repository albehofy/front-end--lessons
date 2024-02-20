# TypeScript
it's a typed language developed by microsoft for taking `js` place, and it's solving js problem and inhance the way of writing code. 
- **TS** transipiled by a transpiler > which is translate `TS` into `JS` 
- instaling TypeScript: `npm install typescript`
## type anotation
- string `let name:string = "value"`
- number `let age:number = 25`
- boolean `let isMaried:boolean = true`
- null `let notAssigned:null= null`
- any `let salary:any = "11000"`
- array `let skills:string[] = ["html", "css", "js", "ts", "reactJS", "angular"]`
- void `function hello():void{console.log("void function")}`
- tuple : mixed array `let employeeData:tuple = ["mohamed", 25, true, ["angular","react"]]`
- symbol : used for creating uniqe data. `let uID:symbol = Symbol()`; 
--------
- when adding more than data type for the same variable this's called **union** 

**Example** : 

```
let salary: string|number;
salary = 11000; 
salary = "11000"
```
## functions 
the new in ts is 
- function type "this's means ading type of function return" `function hello():number{return 10}`
- type of properity `function EmployeeName(name:string){return name}`
- optional paramater `function EmployeeData(name?:string", age:number = 25, salary: number = 11000)`
- function overloading: it's not overloading but we wrapped around it 
```
console.log("-----function overloads-----")
function overLoaded(data: number): void;
function overLoaded(data: string): void;
function overLoaded(n: number, s: string): void;
function overLoaded(s: string, n: number): void;
function overLoaded(s: string, str: string): void;
function overLoaded(n1: number, n2: number, n3: number): void;

function overLoaded(x: string | number, y?: string | number, z?: number) {
    console.log(x);
    if (y) {
        console.log(y)
    } else if (z) {
        console.log(z)
    }
}
overLoaded("Data");
console.log("-----------")
overLoaded(14000);
console.log("-----------");
overLoaded("Data", 12000);
overLoaded(1, 2, 7);
console.log("-----------");
overLoaded(9000, "Data");
```
## Enums
is a way to organize a collection of related values; 

**Example**
```
console.log("----enum----"); 
enum Stuff {
    Mohamed, 
    Mahmoud, 
    Ahmed,
    Ali, 
}

let employee1:Stuff;
employee1 = Stuff.Mohamed; 
console.log(employee1);


let employee2:Stuff;
employee2 = Stuff.Ahmed; 
console.log(employee2);
```
- generic type `<T>` in this's case we will adding the type in runtime

**Example**
```
function genericType<T>(argument:T,data:T[]):T[]{
    data.push(argument)
    return data;
}

var arrayOfString =[] 
genericType<string>("hello",arrayOfString);
console.log(arrayOfString);
genericType<number>(20,arrayOfString);
console.log(arrayOfString);
genericType<string>("hello",arrayOfString);
console.log(arrayOfString);
genericType<boolean>(true,arrayOfString);
genericType<any[]>(["nested",21, false, {"name":"user", "salary": 12000}],arrayOfString);
console.log(arrayOfString);

```
## Classes & OOP
like es6 in syntax writing with more feature like 
- variable have an access modefire (private, protected, public);

**Example**
```
console.log("----Classes and OOP----"); 
class Person extends Employee{
    
    constructor(private readonly id:string,protected status:string, public name:string, age:number, salary:number, isMaried:boolean, skills:string[]){
        super(name,age,salary,isMaried,skills);
    }
    
    set setStatus(status:string){
        this.status = status;
    }

    get getStatus(){
        return this.status; 
    }

    get getId(){
       return this.id; 
    } 

}

const student= new Person("0A", "Single", "Ali",21,12000, false, ["Algorithms", "Data Structure","Design Patterns","OOP"]);
console.log(student.getStatus);
student.setStatus = "Enganged";
console.log(student.getId);
console.log(student.getStatus);
```

## Interface
used for type Checked
```
console.log("----Interface----"); 

interface PersonInterface{
    name:string,
    ID: number, 
    printData: ()=>string
}

interface Payment extends PersonInterface{
    salary:number
}

var p1:Payment = {
    ID: 10, 
    name: "Person Name", 
    salary: 12000,
    printData: ()=>{
        return `${p1.name}, ${p1.ID}`
    },
}

console.log(p1.printData());
```
> interface can be converted into abstarct class. 
- all data inside interface is abstracted, without body, and can't implemented inside interface, 
- abstract class ontain at least one abstract method, with body and can implement inside abstract class
- class can only inherit from 1 abstract 
- class can inherit from 1 ore more interface

## module 
for seprate file into  multible files and adding by  `export`, `import`

**Example**
```
<!-- Shapes file (Shapes.js)-->
export class Triangle {
    draw() {
        console.log('draw triangle');
    }
}
export class Circle {
    draw() {
        console.log('draw circle');
    }
}

<!-- Shapes file (Shapes.js)-->
import { Triangle, Circle } from "./Shapes.js";
let tr = new Triangle();
tr.draw();
let cr = new Circle();
cr.draw();
class Square {
    draw() {
        console.log('draw square');
    }
}
let sq = new Square();
sq.draw();

```

## name spacing
seprate code logically and organizing files by "adding a collection of classes into namespace"

```
<!-- shapes.ts -->
namespace Drawing{
    export interface Shape{
        draw()
    }
}

<!-- circle.ts -->
/// <reference path = "Shapes.ts" />
namespace Drawing {
    export class Circle implements Shape{
        public draw() {
            console.log("Circle is Drawing")
        }
    }
}
<!-- tringle.ts -->
/// <reference path = "Shapes.ts" />
namespace Drawing {
    export class Triangle implements Shape{
        public draw() {
            console.log("triangle is Drawing")
        }
    }
}

<!-- main.ts -->
/// <reference path = "Shapes.ts" />
/// <reference path = "circle.ts" />
/// <reference path = "tringle.ts" />

namespace Drawing {
    function drawingShape(shape:Shape) {
        shape.draw()
    }
    drawingShape(new Circle())
    drawingShape(new Triangle())
}
```

## Decorators
used for adding functionality 

**Example**
```
@Frozen 
class Icecream{}

function Frozen(constructor: function){
    constructor.freeze(constructor); 
    constructor.freeze(constructor.prototpe); 


}
```