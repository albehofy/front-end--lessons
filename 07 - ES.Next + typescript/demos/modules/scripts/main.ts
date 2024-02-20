import { ISahpe, Triangle, Circle } from "./Shapes";

let tr = new Triangle(); 
tr.draw(); 
let cr = new Circle(); 
cr.draw(); 

class Square implements ISahpe {
    draw() {
        console.log('draw square');
    }
}

let sq = new Square(); 
sq.draw(); 