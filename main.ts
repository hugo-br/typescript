import {Point} from './classes/point';

function log(message) {
    console.log(message);
}

var message = 'hello world';

log(message);


let count: number;
count = 10;

const ColorBlue = 0;
const ColorRed = 1;
const ColorGreen = 2;

// enum
enum Color { Blue = 0, Red = 1, Green };
let backgroudColor = Color.Green;

// interface : should be capitalize
interface Point2 {
    x: number,
    y: number
}


// Class Point examples
let point = new Point(2, 5);
point.getXandMessage('deers');
let yu = point.x;
console.log('x : ' + yu);
point.x = 3;
point.draw();