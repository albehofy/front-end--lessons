// data types
console.log("-----data types-----")
class Employee {
    name: string;
    age: number;
    isMaried: boolean;
    skills: string[];
    salary: number;
    // uID: symbol;
    constructor(name: string, age: number, salary: number, isMaried: boolean, skills: Array<string>) {
        // this.uID = Symbol()
        this.name = name;
        this.age = age;
        this.isMaried = isMaried;
        this.skills = skills;
        this.salary = salary;
    }

    printEmployeeDetails(): void {
        console.log(`name: ${this.name}, age: ${this.age}, isMaried: ${this.isMaried}, skills: ${this.skills}`)
    }

    ponus(): number {
        return this.salary * ((this.salary / 100) * 10)
    }

    EmployeeData(name: string = this.name, age: number = this.age, salary?: number): void {
        console.log("name: " + name, "age: " + age, "salary: " + (salary ? salary : "not detected"));
        console.log()
    }
}

const emp1 = new Employee("mohamed", 26, 11000, true, ["html", "css", "javaScript", "bootstrab", "saas", "react", "typescript", "angular"])
emp1.printEmployeeDetails();
emp1.EmployeeData("Mohamed", 25, 11000);
emp1.EmployeeData("Mohamed", 25);
console.log(`employee ${emp1.name}, salary: ${emp1.salary} + ponus 20% , Total is: ${emp1.ponus()}`);

// function overloading
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

// Enum
console.log("----enum----"); 
enum Stuff {
    Mohamed,    //0
    Mahmoud,    //1
    Ahmed,      //2
    Ali,        //3
}

let employee1:Stuff;
employee1 = Stuff.Mohamed; 
console.log(employee1);


let employee2:Stuff;
employee2 = Stuff.Ahmed; 
console.log(employee2)

// generic type 
console.log("----generic type----"); 
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

// Classes and OOP
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

// Interface
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