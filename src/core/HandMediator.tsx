import { Board } from "./Board";
import { Card } from "./cards/Card";
import { Player } from "./Player";

export class HandMediator {

    constructor(
        private readonly player: Player, 
        private readonly board: Board
    ) {}

    playerThrowsACard(card: Card): void {
        throw new Error("Method not implemented.");
    }

    playerGetACard(): Card {
        throw new Error("Method not implemented.");
    }
}