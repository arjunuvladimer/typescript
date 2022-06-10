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
var ES7 = /** @class */ (function () {
    function ES7(b) {
        this.add = b;
    }
    ES7.prototype.disp = function () {
        console.log("Fetch the variable:" + this.add);
        return 10;
    };
    return ES7;
}());
var objnew = new ES7(10);
// OOPS
// Single Inheritance
var ES8 = /** @class */ (function (_super) {
    __extends(ES8, _super);
    function ES8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ES8;
}(ES7));
// Multi Level Inheritane
var ES9 = /** @class */ (function (_super) {
    __extends(ES9, _super);
    function ES9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ES9;
}(ES7));
var ES10 = /** @class */ (function () {
    function ES10() {
    }
    ES10.prototype.display = function () {
        console.log("Display 1");
    };
    return ES10;
}());
var ES11 = /** @class */ (function (_super) {
    __extends(ES11, _super);
    function ES11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ES11.prototype.display = function () {
        console.log("Display 2");
    };
    ES11.prototype.newMethod = function () {
        _super.prototype.display.call(this);
    };
    return ES11;
}(ES10));
var objnew1 = new ES11();
objnew1.display();
var staticClass = /** @class */ (function () {
    function staticClass() {
    }
    staticClass.print = function () {
    };
    return staticClass;
}());
staticClass.a;
staticClass.print();
var some = objnew1 instanceof ES11;
console.log(some);
