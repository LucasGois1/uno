import { Hand } from "./../Hand";
import { TrollEvent } from "../events/TrollEvent";
import { Card } from "./Card";
import { Color, Symbol } from "./characteristics";

export class GreenCard extends Card {
  public doEffect(): TrollEvent | null {
    return null;
  }

  constructor(symbol: string, hand?: Hand) {
    super(Color.GREEN, new Symbol(symbol), hand);
  }
}
