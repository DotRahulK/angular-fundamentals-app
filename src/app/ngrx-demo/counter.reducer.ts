import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

/**
 * The initial state for the counter. In a real application you would
 * define a state interface and include more properties.
 */
export const initialState = 0;

/**
 * A reducer is a pure function that accepts the current state and an action
 * and returns a new state. It uses the <code>on</code> helper to handle
 * specific actions. Reducers must not have side effects.
 */
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => 0)
);