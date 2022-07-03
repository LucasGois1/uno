import { Card } from "../cards";
import { Event } from "../events";

export class ThrowACardEvent extends Event<Card> {
    constructor(card: Card) { 
        super("throwACard", card); 
    }
}