
import {NgModule} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyComponent } from './mycomponent'

import {MyAppComponent} from "./app.component.test"
@NgModule({
    imports: [
        BrowserModule,
        //FormsModule,
        //HttpModule
    ],
    declarations: [
        MyAppComponent,
        MyComponent
    ],
    bootstrap: [ MyAppComponent ]
})
export class AppModule {}
