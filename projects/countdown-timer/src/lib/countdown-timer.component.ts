import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'mahi-countdown-timer',
  template: `
    <div class="counter" *ngIf="timeRemaining">
      <div class="days">
        <div class="value">{{ timeRemaining.days }}</div>
        <span>Days</span>
      </div>
      <div class="hours">
        <div class="value">{{ timeRemaining.hours }}</div>
        <span>Hours</span>
      </div>
      <div class="minutes">
        <div class="value">{{ timeRemaining.minutes }}</div>
        <span>Minutes</span>
      </div>
      <div class="seconds">
        <div class="value">{{ timeRemaining.seconds }}</div>
        <span>Seconds</span>
      </div>
    </div>
  `,
  styles: `
    .counter .days,
    .counter .hours,
    .counter .minutes,
    .counter .seconds {
      width: 22%;
      height: 140px;
      float: left;
      text-align: center;
      font-size: 48px;
      font-weight: 800;
      letter-spacing: 1px;
      color: #fff;
      background-color: #673ab7;
    }

    .counter .days,
    .counter .hours,
    .counter .minutes {
        margin-right: 4%;
    }

    .counter .days .value,
    .counter .hours .value,
    .counter .minutes .value,
    .counter .seconds .value {
        margin-top: 15px;
        display: block;
        width: 100%;
    }

    .counter span {
        font-size: 18px;
        text-transform: uppercase;
        color: #f5a425;
        font-weight: 500;
        letter-spacing: 1px;
        margin-top: 0px;
        display: block;
    }
  `,
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input() targetDate!: Date;
  timeRemaining: any;
  private subscription!: Subscription;

  constructor() {
    if (this.targetDate === undefined) {
      this.targetDate = new Date('2025-12-31T23:59:59');
    }
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
