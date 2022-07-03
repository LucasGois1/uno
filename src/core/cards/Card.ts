import { ThrowACardEvent } from "../events/ThrowACardEvent";
import { Hand } from "../Hand";
import { Producer } from "../tools/patterns/Producer";
import { Color, Symbol } from "./characteristics";
import { Event } from "../events";
import { TrollEvent } from "../events/TrollEvent";

export abstract class Card implements Producer<Event<Card>> {
  constructor(
    private readonly color: Color,
    private readonly symbol: Symbol,
    private hand?: Hand
  ) {}

  public goToHand(hand: Hand): void {
    this.hand = hand;
  }

  getColor(): Color {
    return this.color;
  }

  produce(argument: Event<Card>): void {
    if (!this.hand) throw new Error("Card is not in a hand");

    this.hand.dispatchEvent(argument);
  }

  public match(other: Card): boolean {
    return this.color === other.color || this.symbol === other.symbol;
  }

  public throwMe(): void {
    const event = new ThrowACardEvent(this);
    this.produce(event);
  }

  public abstract doEffect(): TrollEvent | null;
}
