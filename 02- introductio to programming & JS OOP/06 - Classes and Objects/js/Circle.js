class Circle extends Shape {
    #radius;
    constructor(radius) {
        super(radius,radius);
        // this.#radius = this.point2 = radius;
        this.#radius = radius;
    }

    // getting Points
    get radius() {
        return this.#radius
    }
    set radius(radius) {
        this.radius = radius; 
    }
    // overriding draw method in class shape
    draw() {
        console.log("this's a Circle");
    }

    // overriding calculateArea method in class shape
    calculateArea() {
        return (Math.PI * this.#radius * this.#radius);
    }

    calculateDiamater(){
        return (this.#radius * 2)
    }
}