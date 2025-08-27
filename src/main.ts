import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// The entry point for the application. We bootstrap the root AppComponent and
// provide the router configuration.  Additional providers can be added here,
// such as HTTP interceptors or state management providers, but are omitted to
// keep the example simple and dependency free.
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations()
  ]
}).catch(err => console.error(err));

