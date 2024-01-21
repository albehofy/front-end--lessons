 class Shape {
     #point1; 
     #point2; 
     SahpeName;
    constructor(point1, point2) {

        if(new.target == Shape) {
            throw new Error("This's class is an abstract class, you can't be instanced")
        }
        SahpeName = new.target;
        this.point1 = point1; 
        this.point2 = point2;
    }

    draw(){
        console.log("Drawing Shape...")
    }
    
    showShape() {
        console.log(this.point1, this.point2);
    }

    calculateArea() {
        console.log("calculating area")
    }
}