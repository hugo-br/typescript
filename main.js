"use strict";
exports.__esModule = true;
var point_1 = require("./classes/point");
function log(message) {
    console.log(message);
}
var message = 'hello world';
log(message);
var count;
count = 10;
var ColorBlue = 0;
var ColorRed = 1;
var ColorGreen = 2;
// enum
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var backgroudColor = Color.Green;
// Class Point examples
var point = new point_1.Point(2, 5);
point.getXandMessage('deers');
var yu = point.x;
console.log('x : ' + yu);
point.x = 3;
point.draw();
