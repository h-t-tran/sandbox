/// <reference path="./Zoo.ts" />
/// <reference path="./Animal.ts" />
import Zoo = App.Zoo;
import IAnimal = App.IAnimal;
function bootstrap() {

    var ani = new App.Animal();
    var zoo = new App.Zoo();
    zoo.keep(ani);
    zoo.talk("abc");

    var hash : App.Hash<string>  = new App.Hash<string>();

}