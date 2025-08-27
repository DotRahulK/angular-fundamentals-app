import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleChildComponent } from './lifecycle-child.component';

/**
 * Container component for demonstrating Angular lifecycle hooks.  A child
 * component is conditionally rendered via <code>*ngIf</code>. Changing the
 * <code>count</code> input or destroying/recreating the child triggers
 * lifecycle hooks in the child component.  The CommonModule and
 * LifecycleChildComponent are imported because this component is
 * standalone.
 */
@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  imports: [CommonModule, LifecycleChildComponent],
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.css']
})
export class LifecycleDemoComponent {
  count = 0;
  showChild = true;

  increment(): void {
    this.count++;
  }

  toggle(): void {
    this.showChild = !this.showChild;
  }
}