import { Event } from "../../events";

export class Observer<T> {
    constructor(
        private readonly event: Event<T>
    ) {}

    notify(): Event<T> {
        return this.event;
    }
}