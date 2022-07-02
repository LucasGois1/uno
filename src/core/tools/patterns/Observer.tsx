export class Observer {
    constructor(
        private readonly event: Event<any>
    ) {}

    notify(): Event<any> {
        return this.event;
    }
}