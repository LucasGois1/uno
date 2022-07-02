import { Card } from "./cards/Card";

export class Player {

    private hand: Card[]

    constructor(
        private readonly name: string,
    ) {}

    public getName(): string {
        return this.name;
    }

    public giveMyCards(cards: Card[]): void {
        this.hand = cards;
    }

    public playACard(): void {
    }
}