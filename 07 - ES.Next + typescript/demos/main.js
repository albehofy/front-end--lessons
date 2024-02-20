var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// data types
console.log("-----data types-----");
var Employee = /** @class */ (function () {
    // uID: symbol;
    function Employee(name, age, salary, isMaried, skills) {
        // this.uID = Symbol()
        this.name = name;
        this.age = age;
        this.isMaried = isMaried;
        this.skills = skills;
        this.salary = salary;
    }
    Employee.prototype.printEmployeeDetails = function () {
        console.log("name: ".concat(this.name, ", age: ").concat(this.age, ", isMaried: ").concat(this.isMaried, ", skills: ").concat(this.skills));
    };
    Employee.prototype.ponus = function () {
        return this.salary * ((this.salary / 100) * 10);
    };
    Employee.prototype.EmployeeData = function (name, age, salary) {
        if (name === void 0) { name = this.name; }
        if (age === void 0) { age = this.age; }
        console.log("name: " + name, "age: " + age, "salary: " + (salary ? salary : "not detected"));
        console.log();
    };
    return Employee;
}());
var emp1 = new Employee("mohamed", 26, 11000, true, ["html", "css", "javaScript", "bootstrab", "saas", "react", "typescript", "angular"]);
emp1.printEmployeeDetails();
emp1.EmployeeData("Mohamed", 25, 11000);
emp1.EmployeeData("Mohamed", 25);
console.log("employee ".concat(emp1.name, ", salary: ").concat(emp1.salary, " + ponus 20% , Total is: ").concat(emp1.ponus()));
// function overloading
console.log("-----function overloads-----");
function overLoaded(x, y, z) {
    console.log(x);
    if (y) {
        console.log(y);
    }
    else if (z) {
        console.log(z);
    }
}
overLoaded("Data");
console.log("-----------");
overLoaded(14000);
console.log("-----------");
overLoaded("Data", 12000);
overLoaded(1, 2, 7);
console.log("-----------");
overLoaded(9000, "Data");
// Enum
console.log("----enum----");
var Stuff;
(function (Stuff) {
    Stuff[Stuff["Mohamed"] = 0] = "Mohamed";
    Stuff[Stuff["Mahmoud"] = 1] = "Mahmoud";
    Stuff[Stuff["Ahmed"] = 2] = "Ahmed";
    Stuff[Stuff["Ali"] = 3] = "Ali";
})(Stuff || (Stuff = {}));
var employee1;
employee1 = Stuff.Mohamed;
console.log(employee1);
var employee2;
employee2 = Stuff.Ahmed;
console.log(employee2);
// generic type 
console.log("----generic type----");
function genericType(argument, data) {
    data.push(argument);
    return data;
}
var arrayOfString = [];
genericType("hello", arrayOfString);
console.log(arrayOfString);
genericType(20, arrayOfString);
console.log(arrayOfString);
genericType("hello", arrayOfString);
console.log(arrayOfString);
genericType(true, arrayOfString);
genericType(["nested", 21, false, { "name": "user", "salary": 12000 }], arrayOfString);
console.log(arrayOfString);
// Classes and OOP
console.log("----Classes and OOP----");
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(id, status, name, age, salary, isMaried, skills) {
        var _this = _super.call(this, name, age, salary, isMaried, skills) || this;
        _this.id = id;
        _this.status = status;
        _this.name = name;
        return _this;
    }
    Object.defineProperty(Person.prototype, "setStatus", {
        set: function (status) {
            this.status = status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getStatus", {
        get: function () {
            return this.status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}(Employee));
var student = new Person("0A", "Single", "Ali", 21, 12000, false, ["Algorithms", "Data Structure", "Design Patterns", "OOP"]);
console.log(student.getStatus);
student.setStatus = "Enganged";
console.log(student.getId);
console.log(student.getStatus);
// Interface
console.log("----Interface----");
var p1 = {
    name: "Person Name",
    ID: 10,
    printData: function () {
        return "".concat(p1.name, ", ").concat(p1.ID);
    }
};
console.log(p1.printData());
