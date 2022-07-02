import { Card } from "./cards/Card";
import { Color } from "./cards/caracteristcs";
import { Stack } from "./tools/structs/Stack";

export class Board {

    private readonly stackOfCards: Stack<Card>;
    private actualColor: Color;
    private actualCard: Card;

    constructor(cards: Array<Card>){
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
}