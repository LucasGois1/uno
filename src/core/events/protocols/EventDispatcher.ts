import { Event } from "./Event";
import { EventHandler } from "./EventHandler";

export abstract class EventDispatcher<T extends EventHandler<any>> {
  constructor(protected readonly eventHandlers: Map<string, T> = new Map()) {}

  public addEventHandler(eventName: string, eventHandler: T): void {
    this.eventHandlers.set(eventName, eventHandler);
  }

  public removeEventHandler(eventName: string): void {
    this.eventHandlers.delete(eventName);
  }

  public removeAll(): void {
    this.eventHandlers.clear();
  }

  public abstract dispatchEvent(event: Event<any>): void;
}
