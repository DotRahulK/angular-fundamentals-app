import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

/**
 * The root component of the Angular fundamentals demo.  This component
 * establishes the layout for the application, including a navigation bar
 * that links to each demo page and the router outlet where child
 * components are rendered.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Fundamentals Demo';
}