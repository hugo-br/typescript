export class Point {

    constructor(private _x?: number, private _y?: number, _t?: string) { }

    draw() {
        console.log(this._x);
        console.log(this._y);
    }

    getXandMessage(message: string = 'hello') {
        console.log(this._x + ' ' + message);
    }

    // clean syntax 
    get x() {
        return this._x;
    }

    set x(value) {
        if (value <= 0) {
            throw new Error('Value cannot be 0 or under.');
        }

        this._x = value;
    }

    getDistance(another: Point) {

    }
}

