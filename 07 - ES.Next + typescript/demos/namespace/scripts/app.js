/// <reference path = "Shapes.ts" />
var Drawing;
(function (Drawing) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("Circle is Drawing");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
/// <reference path = "Shapes.ts" />
var Drawing;
(function (Drawing) {
    var Triangle = /** @class */ (function () {
        function Triangle() {
        }
        Triangle.prototype.draw = function () {
            console.log("triangle is Drawing");
        };
        return Triangle;
    }());
    Drawing.Triangle = Triangle;
})(Drawing || (Drawing = {}));
/// <reference path = "Shapes.ts" />
/// <reference path = "circle.ts" />
/// <reference path = "tringle.ts" />
var Drawing;
(function (Drawing) {
    function drawingShape(shape) {
        shape.draw();
    }
    drawingShape(new Drawing.Circle());
    drawingShape(new Drawing.Triangle());
})(Drawing || (Drawing = {}));
