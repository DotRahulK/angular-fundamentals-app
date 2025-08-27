import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterStore } from './counter-store.service';

/**
 * A demo component that uses a simple store to manage counter state. The
 * component subscribes to the observable provided by the store and
 * dispatches actions by calling methods on the store. A descriptive
 * message explains how NgRx works and points readers to the example
 * action, reducer and selector files included in this project.
 */
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$ = this.store.count$;

  /** A description of NgRx to display below the demo. */
  readonly ngrxDescription: string =
    `NgRx provides reactive state management based on Redux principles. ` +
    `State is stored in a single immutable object. To update state you ` +
    `dispatch actions defined in files like counter.actions.ts. Reducers ` +
    `respond to actions and return new state (see counter.reducer.ts). ` +
    `Selectors derive slices of state for consumption (counter.selectors.ts).`;

  constructor(private store: CounterStore) {}

  increment(): void {
    this.store.increment();
  }

  decrement(): void {
    this.store.decrement();
  }

  reset(): void {
    this.store.reset();
  }
}