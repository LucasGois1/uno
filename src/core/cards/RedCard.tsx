import { Card } from "./Card";
import { Color, Symbol } from "./caracteristcs";

export class RedCard extends Card {
    public doEffect(): void {
        throw new Error("Method not implemented.");
    }

    constructor(symbol: string) {
        super(Color.RED, new Symbol(symbol));
    }
}