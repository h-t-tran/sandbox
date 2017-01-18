import { Component } from '@angular/core';

import { MyComponent } from './mycomponent';
import { ProductService } from './products/product.service';

@Component({
    selector :  'my-pm-app',
    template :
        `
                <div> this is my app 2</div>
                 <div><button (click)="onclick()">click me</button></div>
                 <span>{{message}}</span>
                 <div><input type="text" value="{{message}}"></div>                 
                 <br/>,
                 <my-component></my-component>
        `,
    //providers: [ ProductService ]
})
export class MyAppComponent {
    pageTitle: string = "My App";
    message: string = "hello world";
    onclick() : void {
        console.debug("on click");
        this.message = "foobar";
    }
}


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