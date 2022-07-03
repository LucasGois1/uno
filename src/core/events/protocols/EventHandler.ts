import { Event } from "./Event";

export interface EventHandler<T extends Event<any>> {
  handle(event: T): void;
}
