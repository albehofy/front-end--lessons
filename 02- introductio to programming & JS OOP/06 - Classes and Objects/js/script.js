// Prematvie and Refernce Value
function primativeVsRefernceVAlues() {
    var str = "hello, mr: Mohamed"; //implicit object creation *** Premative value type
    console.log("this's is premative (value) type containing string with value: " + str)
    console.log(typeof (str));
    var strObject = new String("hello, mr: Mohamed"); //Explicit object creation *** reference value type
    console.log("this's is refrence (value) type containing string with value: " + strObject)
    console.log(typeof (strObject));

    var dt = new Date(1999, 2, 27);
    var dt2 = new Date(1999, 2, 7);
    console.log("dt.getDate(): " + dt.getDate());
    console.log("dt2.getDate(): " + dt2.getDate());
    dt = dt2;
    console.log("dt.getDate() after making dt = dt2: " + dt.getDate());
    dt2.setDate("10");
    console.log(" dt.getDate() after making dt2.setDate(10): " + dt.getDate());
    console.log("dt2.getDate() after making dt2.setDate(10): " + dt.getDate());

}

// intialize Employee Class
function intializeEmployee() {
    // <!-- intialization -->
    var emp1 = new Employee();
    emp1.ID = 1;
    emp1.name = "Mohamed";
    emp1.age = 24;
    emp1.saveEmployee();
    emp1.showEmployee();
    var emp2 = new Employee();
    emp2.ID = 2; // in this's case we adding new properity called id this's id isnot the same of the private id in the class.
    console.log(emp2)
    emp2.name = "John";
    emp2.age = 23;
    emp2.setID(20);
    emp2.saveEmployee();
    emp2.showEmployee();
}

// intialize Person Class
function intializeEmployee() {
    // <!-- intialization -->
    var mohamed = new Person("mohamed", "black", "green", "white");
    mohamed.approvedData();
    mohamed.gettingPersonData();
    var shimaa = new Person("shimaa", "black", "black", "white");
    shimaa.approvedData(); // note ID value  will statr from 0 again with every object.
    shimaa.gettingPersonData();
    var sara = new Person("sara", "yellow", "black", "white");
    sara.approvedData(); // note ID value  will statr from 0 again with every object.
    sara.gettingPersonData();
}

// tseting Throw Error
function showingThrowError() {
    var a = undefined;
    if (a == undefined) {
        throw new Error("Expected Value");
    }
}

// intialize ( Point3D && Line )
function intializingPoint3dAndLine() {
    // <!-- intialization -->
    var firstPoint = new Point3D(10, 10, 10);
    var secondPoint = new Point3D(20, 20, 20);
    // var result = Point3D.calculatDistance(firstPoint, secondPoint);
    var line1 = new Line(firstPoint, secondPoint);
    line1.draw(); 
}

function intializingShapeObjects() {
    // intializing Rectangle Class
    var rect1 = new Rectangle(10, 20); 
    rect1.draw(); 
    rect1.showShape();
    console.log(rect1.calculateArea());

    // intializing Circle Class
    var cir1 = new Circle(10, 20); 
    cir1.draw(); 
    cir1.showShape();
    console.log(cir1.calculateArea()); 

    var s1 = new Shape(20,10); 
    s1.draw();
}