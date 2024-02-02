import { GameContextModel } from "../models/contexts/GameContextModel";
import { GameInfo } from "../models/contexts/GameInfo";
import { createContext } from "react";

export const DEFAULT_GAME_INFO: GameInfo = {
  arena: "",
  isOt: false,
  isReplay: false,
  target: "",
  timeRemaining: 300,
  winner: "",
  players: [],
  score: {
    blue: 0,
    orange: 0,
  },
  series: {
    blue: 0,
    orange: 0,
  },
};

export const GameContext = createContext<GameContextModel>({
  gameInfo: DEFAULT_GAME_INFO,
  setGameInfo: (newGameInfo: GameInfo) => {},
});
