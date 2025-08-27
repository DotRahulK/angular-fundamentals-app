import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * A child component used in the lifecycle demo.  It logs messages when
 * Angular calls its lifecycle hooks. The component accepts an input
 * <code>count</code> to demonstrate how <code>ngOnChanges</code> is
 * triggered when inputs change.
 */
@Component({
  selector: 'app-lifecycle-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="child">
      <p>Child count: {{ count }}</p>
      <ul>
        <li *ngFor="let log of logs">{{ log }}</li>
      </ul>
    </div>
  `,
  styles: [
    `.child { padding: 0.5rem; border: 1px dashed #888; margin-top: 0.5rem; }`,
    `ul { margin: 0.5rem 0; padding-left: 1rem; }`
  ]
})
export class LifecycleChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input() count = 0;
  logs: string[] = [];

  constructor() {
    this.logs.push('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['count']) {
      this.logs.push(`ngOnChanges: count changed to ${this.count}`);
    }
  }

  ngOnInit(): void {
    this.logs.push('ngOnInit');
  }

  ngOnDestroy(): void {
    this.logs.push('ngOnDestroy');
  }
}