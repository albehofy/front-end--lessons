/// <reference path = "Shapes.ts" />
/// <reference path = "circle.ts" />
/// <reference path = "tringle.ts" />

namespace Drawing {
    function drawingShape(shape:Shape) {
        shape.draw()
    }
    drawingShape(new Circle())
    drawingShape(new Triangle())
}