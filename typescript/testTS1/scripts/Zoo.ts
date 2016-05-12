/// <reference path="./Animal.ts" />
namespace App{
    export class Zoo {
        _s: string;
        _msg : string;

        keep(animal : App.IAnimal ) {
            console.debug("Calling animal.add");
            var x: any = 5;
            var y: string = "5";
            animal.add();
        }

        talk(msg : string) : void {
            this._msg = msg;
            console.debug("talk: msg ", msg);
            if(true) {
                let x = 5;
                console.debug(" x  ", x);
            }

        }
    }


    //export interface IMathOperation {
    //    add(x : number, y : number) : number
    //}
    //class Calculator implements IMathOperation  {
    //    add(x : number, y : number) : number { return 0; }
    //}
    //class SciCalculator extends Calculator  {
    //    add(x : number, y : number) : number { return 2; }
    //}

    export class Hash<T> {
        add(obj : T) : boolean {
            return true;
        }
    }

}

// overloads.
function add(x : number, y : number) : number
function add(x : number) : number
{ return x }


