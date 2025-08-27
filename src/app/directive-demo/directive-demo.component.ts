import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Demonstrates structural directives *ngIf and *ngFor. A list of items
 * can be toggled visible or hidden. When visible, *ngFor loops through
 * the items array and renders each element. The CommonModule is imported
 * because it defines the built‑in directives and pipes used in the
 * template.
 */
@Component({
  selector: 'app-directive-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent {
  items = ['Apple', 'Banana', 'Cherry'];
  show = true;
}