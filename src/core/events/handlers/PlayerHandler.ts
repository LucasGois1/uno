import { Player } from "../../Player";
import { EventHandler } from "../protocols/EventHandler";
import { Event } from "../protocols/Event";
import { Board } from "../../Board";

export interface PlayerHandler<T extends Event<any>> extends EventHandler<T> {
  setPlayer(player: Player): void;
  setBoard(board: Board): void;
}
