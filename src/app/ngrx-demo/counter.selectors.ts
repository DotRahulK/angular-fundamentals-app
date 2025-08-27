import { createSelector } from '@ngrx/store';

/**
 * A feature selector that selects the counter state from the global store.
 * In NgRx you typically create a feature key and use createFeatureSelector,
 * but for demonstration purposes we accept the entire state as an
 * object with a <code>counter</code> property.
 */
export const selectCounter = (state: { counter: number }) => state.counter;

/**
 * A memoised selector that derives the doubled count from the
 * counter state. Selectors are composable and only recompute when
 * their inputs change.
 */
export const selectDoubled = createSelector(
  selectCounter,
  (count) => count * 2
);