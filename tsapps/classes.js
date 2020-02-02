var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyMath = /** @class */ (function () {
    // private x: number = 0;
    // private y: number = 0;
    // constructor(x1: number, y1: number){
    //       this.x = x1;
    //       this.y = y1;  
    // }
    function MyMath(x, y) {
        this.x = x;
        this.y = y;
    }
    MyMath.prototype.add = function () {
        return this.x + this.y;
    };
    MyMath.prototype.sub = function () {
        return this.x - this.y;
    };
    return MyMath;
}());
var MyMathDerive = /** @class */ (function (_super) {
    __extends(MyMathDerive, _super);
    function MyMathDerive(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    MyMathDerive.prototype.add = function () {
        return this.a + this.b + 1000;
    };
    MyMathDerive.prototype.mult = function () {
        return this.a * this.b;
    };
    return MyMathDerive;
}(MyMath));
var objBase = new MyMathDerive(300, 200);
console.log("For Base Type add = " + objBase.add());
var obj = new MyMathDerive(30, 20);
console.log("Add = " + obj.add());
console.log("sub = " + obj.sub());
console.log("mult = " + obj.mult());
