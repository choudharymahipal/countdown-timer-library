import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { iTimeRemaining } from '../Interfaces/iCountdown';

@Component({
  selector: 'mahi-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.scss'
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  @Input() targetDate!: Date;
  //Show hide cards
  @Input() display_days: boolean = true;
  @Input() display_hours: boolean = true;
  @Input() display_minutes: boolean = true;
  @Input() display_seconds: boolean = true;

  //Customizable Labels
  @Input() label_days: string = "Days";
  @Input() label_hours: string = "Hours";
  @Input() label_minutes: string = "Minutes";
  @Input() label_seconds: string = "Seconds";

  //Callback
  @Output() isTimerRunning = new EventEmitter<boolean>();
  @Output() timeRemainingCount = new EventEmitter<iTimeRemaining>();
  
  timeRemaining = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  constructor() {
    
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
          this.isTimerRunning.emit(false);
          this.timeRemainingCount.emit(this.timeRemaining);
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
          this.isTimerRunning.emit(true);
          this.timeRemainingCount.emit(this.timeRemaining);
        }
      });
    } catch (error) {
      this.isTimerRunning.emit(false);
      this.timeRemainingCount.emit({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      console.error('Error from <mahi-countdown-timer> tag: ', error);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
