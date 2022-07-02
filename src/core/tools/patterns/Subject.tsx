import { Observer } from "./Observer";

export class Subject {
    constructor(
        private observers: Observer[]
    ) {}

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers.splice(this.observers.indexOf(observer), 1);
    }

    notifyObservers(): void {
        this.observers.forEach(o => o.notify());
    }
}