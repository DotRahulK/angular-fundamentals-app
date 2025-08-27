import { Routes } from '@angular/router';

// Import each standalone component used for routing. Because these components
// are standalone, they can be referenced directly without declaring them in a
// module. The imports are resolved statically so tooling such as the Angular
// Language Service can perform type checking and provide IntelliSense.
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';
import { SignalsDemoComponent } from './signals-demo/signals-demo.component';
import { CounterComponent } from './ngrx-demo/counter.component';

/**
 * Defines the routing configuration for the application. Each route maps a URL
 * path to the component that should be rendered when the path is navigated
 * to. A catch‑all route is provided at the end to redirect unknown paths to
 * the fundamentals page.
 */
export const routes: Routes = [
  { path: '', redirectTo: 'fundamentals', pathMatch: 'full' },
  { path: 'fundamentals', component: FundamentalsComponent },
  { path: 'interpolation', component: InterpolationBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'directive-demo', component: DirectiveDemoComponent },
  { path: 'pipe-demo', component: PipeDemoComponent },
  { path: 'service-demo', component: ServiceDemoComponent },
  { path: 'lifecycle-demo', component: LifecycleDemoComponent },
  { path: 'signals-demo', component: SignalsDemoComponent },
  { path: 'ngrx-demo', component: CounterComponent },
  { path: '**', redirectTo: 'fundamentals' }
];