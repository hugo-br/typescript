"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(_x, _y, _t) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log(this._x);
        console.log(this._y);
    };
    Point.prototype.getXandMessage = function (message) {
        if (message === void 0) { message = 'hello'; }
        console.log(this._x + ' ' + message);
    };
    Object.defineProperty(Point.prototype, "x", {
        // clean syntax 
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value <= 0) {
                throw new Error('Value cannot be 0 or under.');
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
exports.Point = Point;
