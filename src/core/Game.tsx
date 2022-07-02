import { Board } from "./Board";
import { Card, BlueCard, RedCard, YellowCard, GreenCard } from "./cards";
import { Mediator } from "./Mediator";
import { Player } from "./Player";
import { HandMediator } from "./HandMediator";


export class Game {

    constructor(
        private players: Player[],
        private board: Board,
        private mediator: Mediator<Card>
    ) {
        this.newGame();
    }

    newGame(): void {
        const allCards = [
            ...this.getBlueCards(), 
            ...this.getRedCards(), 
            ...this.getYellowCards(), 
            ...this.getGreenCards()
        ];

        this.board = new Board(allCards);
        this.mediator = new HandMediator();
        this.players = [
            new Player("Player 1"),
            new Player("Player 2"),
            new Player("Player 3"),
            new Player("Player 4")
        ];
    }

    init(): void {
        this.players.forEach(player => {
            player.giveMyCards(this.mediator.notify());
        });
    }

    getNumbers(): number[] {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    }

    getBlueCards(): Card[] {
        return this
                .getNumbers()
                .map(number => new BlueCard(number.toString()));
    }

    getRedCards(): Card[] {
        return this
                .getNumbers()
                .map(number => new RedCard(number.toString()));
    }

    getYellowCards(): Card[] {
        return this
                .getNumbers()
                .map(number => new YellowCard(number.toString()));
    }

    getGreenCards(): Card[] {
        return this
                .getNumbers()
                .map(number => new GreenCard(number.toString()));
    }
}