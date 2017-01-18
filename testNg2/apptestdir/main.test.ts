import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// reference app.module.ts
import { AppModule } from './app.module.test';

platformBrowserDynamic().bootstrapModule( AppModule );
