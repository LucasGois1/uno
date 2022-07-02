import { Card } from "./Card";
import { Color, Symbol } from "./caracteristcs";

export class YellowCard extends Card {
    public doEffect(): void {
        throw new Error("Method not implemented.");
    }

    constructor(symbol: string) {
        super(Color.YELLOW, new Symbol(symbol));
    }
}