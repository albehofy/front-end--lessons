class Rectangle extends Shape {
    #width; 
    #height; 
    constructor(width, height) {
        super(width, height);
        this.#width = width;
        this.#height = height;
    }

    // getting Points Value 
    get width() {
        return this.#width;
    }
    set width(width) {
        this.#width =  width; 
        
    }
    get height() {
        return this.#height; 
    }
    set height(height) {
        this.#height = height;
    }
    // overriding draw method in class shape
    draw() {
        super.draw();
        console.log("this's a rectangle")
    }

    // overriding calculateArea method in class shape
    calculateArea() {
        return (this.#width * this.#height);
    }

    calculateDiamater(){
        return (this.#width + this.#height)
    }
}