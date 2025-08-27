import { createAction } from '@ngrx/store';

/**
 * Action definitions for the NgRx counter example. Actions are simple
 * objects with a type that describe an event in the application. They
 * are dispatched to the store to request a state change. Reducers
 * listen for these actions and update the state accordingly.
 */
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');