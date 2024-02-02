import { USPlayer } from "../UpdateState/USPlayer";
import { GameScore } from "../common/GameScore";

export interface GameInfo {
  arena: string;
  isOt: boolean;
  isReplay: boolean;
  target: string;
  timeRemaining: number;
  winner: string;
  players: USPlayer[];
  score: GameScore;
  series: GameScore;
}
