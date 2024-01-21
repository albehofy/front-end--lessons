class Employee {
    // <!-- member variables (properites) -->
    #ID;
    name;
    age = 18;

    constructor() {
        this.#ID = 0;
        this.name = "no name founded";
        this.age = "18"
        console.log("running inside the constructor");
    }
    // <!-- member methods -->
    showEmployee() {
        console.log("Employee Name " + this.name + ", and his age is " + this.age)
    }

    setID(id) {
        this.#ID = id;
    }

    getID() {
        return this.#ID;
    }

    saveEmployee() {
        console.log("Employee saved !, with ID: " + this.#ID);
    }
}