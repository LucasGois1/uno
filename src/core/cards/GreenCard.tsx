import { Card } from "./Card";
import { Color, Symbol } from "./caracteristcs";

export class GreenCard extends Card {
    public doEffect(): void {
        throw new Error("Method not implemented.");
    }

    constructor(symbol: string) {
        super(Color.GREEN, new Symbol(symbol));
    }
}