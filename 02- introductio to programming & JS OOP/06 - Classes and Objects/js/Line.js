class Line {
    constructor(p1, p2){
        this.p1 = p1; 
        this.p2 = p2;
    }

    draw() {
        console.log("point1");
        this.p1.printPoint();
        console.log("point2s");
        this.p2.printPoint()
    }
}