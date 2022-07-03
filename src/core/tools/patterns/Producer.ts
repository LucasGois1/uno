export interface Producer<T> {
    produce(argument: T): void;
}