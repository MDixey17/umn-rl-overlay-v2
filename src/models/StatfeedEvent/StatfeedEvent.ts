import { Player } from "../common/Player";

export interface StatfeedEvent {
  event_name: string;
  main_target: Player;
  secondary_target: Player;
  type: string;
}
