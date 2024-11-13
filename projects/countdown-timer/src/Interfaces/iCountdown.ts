export interface iCountdownStatus {
    isStarted: boolean;
    isFinished: boolean;
    timeRemaining: iTimeRemaining;
}

export interface iTimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
