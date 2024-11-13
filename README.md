# Countdown Timer
You can install it from here [NPM Package](https://www.npmjs.com/package/@choudharymahipal/countdown-timer)

## Overview
CountdownTimer is a lightweight, customizable JavaScript library that enables you to create countdown timers effortlessly. Ideal for web applications, events, or any time-based functionality.

![Coutdown-timer screenshot](https://raw.githubusercontent.com/choudharymahipal/choudharymahipal/80e97bf65b84dffef7684a535af3e2a88ec0ed3a/assets/images/timer.png)

## Demo 
[![Open in StackBlitz for DEMO](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/stackblitz-starters-kyfnbq?embed=1&file=src%2Fmain.ts)

## Features
- Easy integration and setup
- Customizable appearance
- Show/Hide cards (Days, Hours, Minutes and Seconds)
- Customizable Labels (Change labels according to your language preferences)
- Callback to get status about countdown timer.

## Installation
Install the library via npm:
```
npm i @choudharymahipal/countdown-timer
```

if any dependancy error then try this
```
npm i @choudharymahipal/countdown-timer --legacy-peer-deps
```


## Usage 
### Step 1: Import the Module
In your app.module.ts:
```
import { CountdownTimerModule } from '@choudharymahipal/countdown-timer';

@NgModule({
  imports: [
    CountdownTimerModule
  ],
})
export class AppModule { }
```

### Step 2: Add the Component
Use the countdown timer in your component's template:


> For *v0.0.2 :* Just pass your `targetDate` and it will generate countdown timer based on `targetDate`. Here `targetDate` is required and It will accept `Date` format only, not a string.
```
<mahi-countdown-timer [targetDate]="targetDate"></mahi-countdown-timer>
```


> For *v1.0.0 :* We have added 4 new properties to show and hide any card based on your requirements. `display_days`, `display_hours`, `display_minutes` and `display_seconds` are `boolean` type variables. Just pass `true` and `false`, it will show/hide cards automatically. All these 4 properties are optional. 
```
<mahi-countdown-timer 
    [targetDate]="targetDate"
    [display_days]="display_days"
    [display_hours]="display_hours"
    [display_minutes]="display_minutes"
    [display_seconds]="display_seconds"
>
</mahi-countdown-timer>
```


> For *v2.0.0 :*  Now, New customizable Labels and callback events are introduced. You can add your own labels for each cards in your language. And from `isTimerRunning` and `timeRemainingCount`, will give you, latest updated status about current countdown timer. For more details you can check its demo on stackblitz.
```
<mahi-countdown-timer 
    [targetDate]="targetDate"
    [display_days]="display_days"
    [display_hours]="display_hours"
    [display_minutes]="display_minutes"
    [display_seconds]="display_seconds"
    [label_days]="label_days"
    [label_hours]="label_hours" 
    [label_minutes]="label_minutes" 
    [label_seconds]="label_seconds" 
    (isTimerRunning)="getIsTimerRunning($event)" 
    (timeRemainingCount)="getTimeRemainingCount($event)">
>
</mahi-countdown-timer>
```


### Step 3: Define the Target Time and setup properties
In your component TypeScript file:
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class YourComponent {
  targetTime: Date = new Date('2025-12-31T23:59:59'); //Required

  //show and hide cards
  display_days: boolean = false; //Optional
  display_hours: boolean = true; //Optional
  display_minutes: boolean = true; //Optional
  display_seconds: boolean = true; //Optional

  //labels
  label_days: string = "Day"; //Optional
  label_hours: string = "Hour"; //Optional
  label_minutes: string = "Minute"; //Optional
  label_seconds: string = "Second"; //Optional

  //Callback events
  isTimerRunning: boolean = false;
  timeRemaining = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  constructor() {}

  getIsTimerRunning(event:any){
    this.isTimerRunning = event;
  }

  getTimeRemainingCount(event:any){
    this.timeRemaining = event;
  }

}
```

## Contributing
> [!NOTE]
> We welcome contributions to the Countdown Timer Library! If you'd like to help out, please visit our GitHub repository: [countdown-timer-library](https://github.com/choudharymahipal/countdown-timer-library).
