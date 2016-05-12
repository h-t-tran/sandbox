var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../typings/jquery.d.ts" />
var App;
(function (App) {
    var Animal = (function () {
        function Animal() {
        }
        Animal.prototype.add = function () {
            $("#div1").text("abc");
            return 1;
        };
        return Animal;
    }());
    App.Animal = Animal;
    var Dog = (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            _super.apply(this, arguments);
        }
        Dog.prototype.add = function () {
            $("#div1").text("deg");
            return 1;
            s;
        };
        return Dog;
    }(Animal));
    App.Dog = Dog;
})(App || (App = {}));
//# sourceMappingURL=Animal.js.map