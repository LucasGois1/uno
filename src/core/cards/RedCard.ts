import { Card } from "./Card";
import { Color, Symbol } from "./caracteristcs";
import { Hand } from "../Hand";

export class RedCard extends Card {
    public doEffect(): void {
        throw new Error("Method not implemented.");
    }

    constructor(symbol: string, hand: Hand?) {
        super(Color.RED, new Symbol(symbol), hand);
    }
}