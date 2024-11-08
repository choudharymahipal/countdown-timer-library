# Countdown Timer Library
You can install it from here [NPM Package](https://www.npmjs.com/package/@choudharymahipal/countdown-timer)

## Overview
CountdownTimer is a lightweight, customizable JavaScript library that enables you to create countdown timers effortlessly. Ideal for web applications, events, or any time-based functionality.

![Coutdown-timer screenshot](https://raw.githubusercontent.com/choudharymahipal/choudharymahipal/80e97bf65b84dffef7684a535af3e2a88ec0ed3a/assets/images/timer.png)

StackBlitz Demo: [Click here](https://stackblitz.com/edit/stackblitz-starters-kyfnbq?file=src%2Fmain.ts)

## Features
- Easy integration and setup
- Customizable appearance

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
```
<mahi-countdown-timer [targetDate]="targetDate"></mahi-countdown-timer>
```

### Step 3: Define the Target Time
In your component TypeScript file:
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class YourComponent {
  targetTime: Date = new Date('2025-12-31T23:59:59');
}
```

## Contributing
We welcome contributions to the Countdown Timer Library! If you'd like to help out, please visit our GitHub repository: [countdown-timer-library](https://github.com/choudharymahipal/countdown-timer-library).
