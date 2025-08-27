import { Component, signal, computed, effect } from '@angular/core';

/**
 * Demonstrates Angular Signals, a new reactive primitive introduced in
 * Angular 16 and stabilised in Angular 19. Signals represent reactive
 * values that update the view automatically when they change. Computed
 * signals derive values from other signals and update when their
 * dependencies change. Effects run side effects in response to signal
 * changes. In this demo the counter signal updates the doubled
 * computed signal and logs changes via an effect.
 */
@Component({
  selector: 'app-signals-demo',
  standalone: true,
  templateUrl: './signals-demo.component.html',
  styleUrls: ['./signals-demo.component.css']
})
export class SignalsDemoComponent {
  // A writable signal representing a counter
  counter = signal(0);

  // A computed signal that derives its value from the counter
  doubled = computed(() => this.counter() * 2);

  // An array that collects log messages whenever the counter changes
  log: string[] = [];

  constructor() {
    // Register an effect that runs whenever the counter changes
    effect(() => {
      const count = this.counter();
      this.log.push(`Counter changed to ${count}`);
    });
  }

  increment(): void {
    this.counter.update((c) => c + 1);
  }

  decrement(): void {
    this.counter.update((c) => c - 1);
  }
}