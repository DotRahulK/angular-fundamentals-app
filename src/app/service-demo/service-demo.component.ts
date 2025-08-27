import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeService } from './time.service';
import { Subscription, interval } from 'rxjs';

/**
 * Demonstrates dependency injection and services. The component injects
 * TimeService to obtain the current time and uses an RxJS interval to
 * update the time every second. The subscription is cleaned up when the
 * component is destroyed.
 */
@Component({
  selector: 'app-service-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit, OnDestroy {
  currentTime = '';
  private sub?: Subscription;

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    // set initial time
    this.currentTime = this.timeService.now();
    // update the time every second
    this.sub = interval(1000).subscribe(() => {
      this.currentTime = this.timeService.now();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}