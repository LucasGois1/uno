import { Card } from "./cards/Card";
import { Color } from "./cards/characteristics";
import { Stack } from "./tools/structs/Stack";
import { Hand } from "./Hand";
import { Queue } from "./tools/structs/Queue";

export class Board {
  private readonly stackOfCards: Stack<Card>;
  private actualColor: Color;
  private actualCard: Card;
  private hands: Queue<Hand> = new Queue();

  constructor(cards: Array<Card>) {
    this.stackOfCards = new Stack(this.shuffleCards(cards));
    this.actualColor = this.defineActualColor();
    this.actualCard = this.initGame();
  }

  public shuffleCards(cards: Array<Card>): Array<Card> {
    return cards.sort(() => Math.random() * (112 - 1 + 1) + 1);
  }

  public defineActualColor(): Color {
    let colors = [Color.RED, Color.GREEN, Color.BLUE, Color.YELLOW];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  public initGame(): Card {
    return this.stackOfCards.pop();
  }

  public getInitialHand(): Array<Card> {
    const cards = [];

    for (let i = 0; i < 7; i++) {
      cards.push(this.stackOfCards.pop());
    }

    return cards;
  }

  public getActualColor(): Color {
    return this.actualColor;
  }

  public getActualCard(): Card {
    return this.actualCard;
  }

  public changeTheColor(color: Color): void {
    this.actualColor = color;
  }

  public showActualCard(): Card {
    return this.actualCard;
  }

  canPlayThisCard(card: Card): boolean {
    return this.actualCard.match(card);
  }

  playThatCard(card: Card): void {
    this.updateActualCard(card);
    this.updateActualColor(card.getColor());

    this.nextHand();
  }

  nextHand(): void {
    const effect = this.actualCard.doEffect();

    if (effect) {
      const hand = this.hands.dequeue();

      hand.dispatchEvent(effect);

      this.hands.enqueue(hand);
    }
  }

  updateActualCard(card: Card): void {
    this.actualCard = card;
  }

  updateActualColor(color: Color): void {
    this.actualColor = color;
  }
}
