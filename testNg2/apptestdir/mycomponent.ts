import {Component, OnInit } from "@angular/core";
@Component({
    selector: "my-component",
    template: "this is component 1",

    // templatex: "<h1>{{title}}</h1>" +
    //         "<div>this is a list of my products</div>"
})
export class MyComponent implements OnInit{
    title : "My Component";

    constructor() {

    }


    ngOnInit() : void {

    }
}