import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'mahi-countdown-timer',
  template: `
    <div *ngIf="timeRemaining">
      <h2>Countdown Timer</h2>
      <p>{{ timeRemaining.days }} Days</p>
      <p>{{ timeRemaining.hours }} Hours</p>
      <p>{{ timeRemaining.minutes }} Minutes</p>
      <p>{{ timeRemaining.seconds }} Seconds</p>
    </div>
  `,
  styles: ``,
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input() targetDate!: Date;
  timeRemaining: any;
  private subscription!: Subscription;

  constructor() {
    if (this.targetDate === undefined) {
      this.targetDate = new Date('2025-12-31T23:59:59');
    }
    console.log('targetDate: ', this.targetDate);
  }

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    try {
      const targetTimestamp = this.targetDate.getTime();

      this.subscription = interval(1000).subscribe(() => {
        const currentTimestamp = new Date().getTime();
        const timeDiff = targetTimestamp - currentTimestamp;

        if (timeDiff <= 0) {
          this.timeRemaining = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          };
          this.subscription.unsubscribe();
        } else {
          this.timeRemaining = {
            days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
              (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
          };
        }
      });
    } catch (error) {
      console.error('Error from <mahi-countdown-timer> tag: ', error);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
