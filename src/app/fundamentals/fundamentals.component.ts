import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * The fundamentals component provides an overview of core Angular concepts and
 * highlights new features introduced in Angular 19.  Each section links to
 * a dedicated demo page where the concept is demonstrated interactively.
 */
@Component({
  selector: 'app-fundamentals',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './fundamentals.component.html',
  styleUrls: ['./fundamentals.component.css']
})
export class FundamentalsComponent {}