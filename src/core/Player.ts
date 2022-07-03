import { Card } from "./cards/Card";
import { Hand } from "./Hand";

export class Player {
  private cards: Card[] = [];

  constructor(
    private readonly name: string,
    private readonly hand: Hand,
    private myTurn: boolean = false
  ) {}

  public getName(): string {
    return this.name;
  }

  public giveMyCards(cards: Card[]): void {
    this.cards = cards;
  }

  public playACard(card: Card): void {
    this.cards.splice(this.cards.indexOf(card), 1);
  }

  public yourTurn(): void {
    this.myTurn = true;
  }

  public isMyTurn(): boolean {
    return this.myTurn;
  }
}
