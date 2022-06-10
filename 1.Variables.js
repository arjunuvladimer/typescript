// Type
var a = 10;
var b = "hello world";
var c = true;
var d;
var e;
var f;
// Scope
// Global Scope
// Class Scope => Variables
// Local Scope => Functional, Constructor, loops
var ES6 = /** @class */ (function () {
    function ES6() {
        this.a = 10;
    }
    ES6.prototype.add = function () {
        console.log("display");
    };
    return ES6;
}());
var obj = new ES6();
console.log(obj.a);
