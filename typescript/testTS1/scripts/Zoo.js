/// <reference path="./Animal.ts" />
var App;
(function (App) {
    var Zoo = (function () {
        function Zoo() {
        }
        Zoo.prototype.keep = function (animal) {
            console.debug("Calling animal.add");
            var x = 5;
            var y = "5";
            animal.add();
        };
        Zoo.prototype.talk = function (msg) {
            this._msg = msg;
            console.debug("talk: msg ", msg);
            if (true) {
                var x = 5;
                console.debug(" x  ", x);
            }
        };
        return Zoo;
    }());
    App.Zoo = Zoo;
    //export interface IMathOperation {
    //    add(x : number, y : number) : number
    //}
    //class Calculator implements IMathOperation  {
    //    add(x : number, y : number) : number { return 0; }
    //}
    //class SciCalculator extends Calculator  {
    //    add(x : number, y : number) : number { return 2; }
    //}
    var Hash = (function () {
        function Hash() {
        }
        Hash.prototype.add = function (obj) {
            return true;
        };
        return Hash;
    }());
    App.Hash = Hash;
})(App || (App = {}));
function add(x) { return x; }
//# sourceMappingURL=Zoo.js.map