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
