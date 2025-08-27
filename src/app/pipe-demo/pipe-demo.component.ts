import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExclaimPipe } from './exclaim.pipe';

/**
 * Demonstrates the use of built‑in and custom pipes. The built‑in
 * <code>date</code> pipe formats a Date instance, and the custom
 * <code>exclaim</code> pipe appends exclamation marks to a string.
 */
@Component({
  selector: 'app-pipe-demo',
  standalone: true,
  imports: [CommonModule, ExclaimPipe],
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {
  today: Date = new Date();
  text = 'Angular';
}