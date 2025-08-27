import { Injectable } from '@angular/core';

/**
 * A simple service that returns the current time as a locale string.
 * Services encapsulate reusable business logic and can be provided at
 * the application or component level via Angular’s dependency injection
 * system.
 */
@Injectable({
  providedIn: 'root'
})
export class TimeService {
  /**
   * Returns the current time formatted for the user's locale.
   */
  now(): string {
    return new Date().toLocaleTimeString();
  }
}