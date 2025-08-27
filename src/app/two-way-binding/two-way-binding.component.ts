import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Demonstrates two‑way data binding using the ngModel directive. The
 * component maintains a message string that stays in sync with the
 * input field. The template uses the FormsModule from
 * @angular/forms to enable the [(ngModel)] syntax.
 */
@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  message = '';
}