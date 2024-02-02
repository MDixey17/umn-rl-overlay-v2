import { Location } from "../common/Location";
import { Player } from "../common/Player";
import { BallLastTouch } from "./BallLastTouch";

export interface GoalScored {
  ball_last_touch: BallLastTouch;
  goalspeed: number;
  impact_location: Location;
  scorer: Player;
}
