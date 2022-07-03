import { Card } from "./Card";
import { Color, Symbol } from "./caracteristcs";
import { Hand } from "../Hand";

export class YellowCard extends Card {
    public doEffect(): void {
        throw new Error("Method not implemented.");
    }

    constructor(symbol: string, hand: Hand) {
        super(Color.YELLOW, new Symbol(symbol), hand);
    }
}