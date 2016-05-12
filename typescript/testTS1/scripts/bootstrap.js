/// <reference path="./Zoo.ts" />
/// <reference path="./Animal.ts" />
var Zoo = App.Zoo;
function bootstrap() {
    var ani = new App.Animal();
    var zoo = new App.Zoo();
    zoo.keep(ani);
    zoo.talk("abc");
    var hash = new App.Hash();
}
//# sourceMappingURL=bootstrap.js.map