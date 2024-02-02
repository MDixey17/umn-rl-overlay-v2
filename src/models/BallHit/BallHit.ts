import { Player } from "../common/Player";
import { Ball } from "./Ball";

export interface BallHit {
  ball: Ball;
  player: Player;
}
