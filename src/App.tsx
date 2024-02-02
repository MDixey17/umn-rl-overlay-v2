import { useEffect, useState } from "react";
import { WebsocketService } from "./services/websocketService";
import { WebsocketContext } from "./contexts/WebsocketContext";
import { Overlay } from "./components/Overlay";
import { GameInfo } from "./models/contexts/GameInfo";
import { DEFAULT_GAME_INFO, GameContext } from "./contexts/GameContext";
import { WEBSOCKET_PORT } from "./constants/GameConstants";

export const App = () => {
  const [gameInfo, setGameInfo] = useState<GameInfo>(DEFAULT_GAME_INFO);

  useEffect(() => {
    WebsocketService.init(WEBSOCKET_PORT, false);
  });

  return (
    <WebsocketContext.Provider value={WebsocketService}>
      <GameContext.Provider
        value={{ gameInfo: gameInfo, setGameInfo: setGameInfo }}
      >
        <Overlay />
      </GameContext.Provider>
    </WebsocketContext.Provider>
  );
};
