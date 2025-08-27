import { Component } from '@angular/core';

/**
 * Demonstrates string interpolation and property binding. The component has a
 * "name" property and an image URL. The template uses interpolation to
 * display values and property binding to set an image source and input
 * value. As the user types into the input field, the bound property
 * updates and the template reflects the change.
 */
@Component({
  selector: 'app-interpolation-binding',
  standalone: true,
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css']
})
export class InterpolationBindingComponent {
  name = 'Angular';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';

  getGreeting(): string {
    return `Hello ${this.name}!`;
  }
}