## Please do not use it right now. It is under development library (till 15th October 2024).

# Countdown Timer Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Overview

The **Countdown Timer Library** is an easy-to-use Angular library for creating countdown timers in your applications. Perfect for events, promotions, and more!

## Features

- Easy integration and setup
- Customizable appearance
- Event callbacks on completion

## Installation

Install the library via npm:

```
npm install countdown-timer-library
```

## Usage
### Step 1: Import the Module
In your app.module.ts:
```
import { CountdownTimerModule } from 'countdown-timer-library';

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
<mahi-countdown-timer [countdownTime]="targetTime"> </mahi-countdown-timer>
```

### Step 3: Define the Target Time
In your component TypeScript file:
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html'
})
export class YourComponent {
  targetTime: Date = new Date('2024-12-31T23:59:59');

  onCountdownComplete() {
    console.log('Countdown completed!');
  }
}
```

## Contributing
We welcome contributions to the Countdown Timer Library! If you'd like to help out, please visit our GitHub repository: [countdown-timer-library](https://github.com/choudharymahipal/countdown-timer-library).