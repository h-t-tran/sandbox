/// <reference path="../typings/jquery.d.ts" />
namespace App{
    export interface IAnimal {
        add() : number;
    }
    export class Animal implements IAnimal{
        add() : number {
            $("#div1").text("abc");
            return 1;
        }
    }

    export class Dog extends Animal{
        add() : number {
            $("#div1").text("deg");
            return 1;s
        }
    }
}

