import { GameInfo } from "./GameInfo";

export interface GameContextModel {
  gameInfo: GameInfo;
  setGameInfo: (newGameInfo: GameInfo) => void;
}
