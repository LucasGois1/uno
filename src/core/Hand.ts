import { Event } from "./events";
import { PlayerHandler } from "./events/handlers/PlayerHandler";
import { EventDispatcher } from "./events/protocols/EventDispatcher";
import { Player } from "./Player";

export class Hand extends EventDispatcher<PlayerHandler<Event<any>>> {
  constructor(private readonly player: Player) {
    super();
  }

  public dispatchEvent(event: Event<any>): void {
    const eventHandler = this.eventHandlers.get(event.getName());

    if (!eventHandler)
      throw new Error(
        `An EventHandler for the event '${event.getName()}' is not registered.`
      );

    eventHandler.setPlayer(this.player);
    eventHandler.handle(event);
  }
}
