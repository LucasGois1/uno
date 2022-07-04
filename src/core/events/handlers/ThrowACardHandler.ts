import { Board } from "../../Board";
import { Player } from "../../Player";
import { ThrowACardEvent } from "../ThrowACardEvent";
import { PlayerHandler } from "./PlayerHandler";

export class ThrowACardHandler implements PlayerHandler<ThrowACardEvent> {
  private player!: Player;
  private board!: Board;

  setPlayer(player: Player): void {
    this.player = player;
  }

  setBoard(board: Board): void {
    this.board = board;
  }

  handle(event: ThrowACardEvent): void {
    const actualCard = event.getArgument();

    if (this.board.canPlayThisCard(actualCard)) {
      this.player.playACard(actualCard);
    }

    this.board.playThatCard(actualCard);
  }
}
