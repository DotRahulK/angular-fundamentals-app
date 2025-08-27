import { Component } from '@angular/core';

/**
 * Demonstrates event binding. A simple counter is incremented each time
 * the button is clicked. Event handlers update component state and the
 * template reflects the new value.
 */
@Component({
  selector: 'app-event-binding',
  standalone: true,
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  count = 0;

  increment(): void {
    this.count++;
  }
}