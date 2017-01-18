"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MyAppComponent = (function () {
    function MyAppComponent() {
        this.pageTitle = "My App";
        this.message = "hello world";
    }
    MyAppComponent.prototype.onclick = function () {
        console.debug("on click");
        this.message = "foobar";
    };
    MyAppComponent = __decorate([
        core_1.Component({
            selector: 'my-pm-app',
            template: "\n                <div> this is my app 2</div>\n                 <div><button (click)=\"onclick()\">click me</button></div>\n                 <span>{{message}}</span>\n                 <div><input type=\"text\" value=\"{{message}}\"></div>                 \n                 <br/>,\n                 <my-component></my-component>\n        ",
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
}());
exports.MyAppComponent = MyAppComponent;
//
// import { Component } from '@angular/core';
//
// import { MyComponent } from './mycomponent';
// import { ProductService } from './products/product.service';
//
// @Component({
//     selector :  'my-pm-app',
//     template: `
//     <div><h1>{{pageTitle}}</h1>
//         <pm-products></pm-products>
//     </div>
//     `,
//     providers: [ ProductService ]
// })
// export class MyAppComponent {
//     pageTitle: string = `Acme Product Management`;
//
// } 
//# sourceMappingURL=app.component.test.js.map