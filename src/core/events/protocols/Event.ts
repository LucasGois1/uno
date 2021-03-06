export class Event<T> {
    constructor(
        private readonly name: string,
        private readonly argument: T
    ) {}

    getName(): string {
        return this.name;
    }
    
    getArgument(): T {
        return this.argument;
    }
}