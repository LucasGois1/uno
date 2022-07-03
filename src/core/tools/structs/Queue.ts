export class Queue<T> {
  private _queue: T[];

  constructor() {
    this._queue = [];
  }

  public enqueue(item: T): void {
    this._queue.push(item);
  }

  public dequeue(): T {
    const item = this._queue.shift();
    if (!item) throw new Error("Queue is empty");

    return item;
  }

  public peek(): T {
    return this._queue[0];
  }

  public isEmpty(): boolean {
    return this._queue.length === 0;
  }

  public size(): number {
    return this._queue.length;
  }

  public invert(): void {
    this._queue.reverse();
  }
}
