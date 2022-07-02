import { Color, Symbol } from "./caracteristcs";

export abstract class Card {
    constructor(
        private readonly color: Color,
        private readonly symbol: Symbol
    ) {}

    public match(other: Card): boolean {
        return this.color === other.color && this.symbol === other.symbol;
    }

    public throwMe(): Card {
        return this;
    }

    public abstract doEffect(): void;
}