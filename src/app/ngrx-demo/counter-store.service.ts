import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * A minimal counter store that mimics NgRx behaviour using a BehaviourSubject.
 * The store exposes an observable <code>count$</code> for the current
 * count and methods to increment, decrement and reset the count. This
 * provides a working example of unidirectional data flow without any
 * external dependencies.
 */
@Injectable({ providedIn: 'root' })
export class CounterStore {
  private readonly countSubject = new BehaviorSubject<number>(0);
  readonly count$: Observable<number> = this.countSubject.asObservable();

  /** Increment the counter. */
  increment(): void {
    this.countSubject.next(this.countSubject.value + 1);
  }

  /** Decrement the counter. */
  decrement(): void {
    this.countSubject.next(this.countSubject.value - 1);
  }

  /** Reset the counter to zero. */
  reset(): void {
    this.countSubject.next(0);
  }
}