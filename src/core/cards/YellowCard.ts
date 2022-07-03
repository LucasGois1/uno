import { Card } from "./Card";
import { Color, Symbol } from "./characteristics";
import { Hand } from "../Hand";
import { TrollEvent } from "../events/TrollEvent";

export class YellowCard extends Card {
  public doEffect(): TrollEvent | null {
    throw new Error("Method not implemented.");
  }

  constructor(symbol: string, hand?: Hand) {
    super(Color.YELLOW, new Symbol(symbol), hand);
  }
}
