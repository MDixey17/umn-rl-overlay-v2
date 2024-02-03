import { useEffect, useState } from "react";
import { WebsocketService } from "./services/websocketService";
import { WebsocketContext } from "./contexts/WebsocketContext";
import { Overlay } from "./components/Overlay/Overlay";
import { GameInfo } from "./models/contexts/GameInfo";
import { DEFAULT_GAME_INFO, GameContext } from "./contexts/GameContext";
import { WEBSOCKET_PORT } from "./constants/GameConstants";
import { ConfigContext, DEFAULT_CONFIG_INFO } from "./contexts/ConfigContext";
import { ConfigInfo } from "./models/contexts/ConfigInfo";
import { OverlayConfig } from "./components/OverlayConfig/OverlayConfig";

export const App = () => {
  const [gameInfo, setGameInfo] = useState<GameInfo>(DEFAULT_GAME_INFO);
  const [configInfo, setConfigInfo] = useState<ConfigInfo>(DEFAULT_CONFIG_INFO);

  useEffect(() => {
    WebsocketService.init(WEBSOCKET_PORT, false);
  }, []);

  return (
    <WebsocketContext.Provider value={WebsocketService}>
      <GameContext.Provider
        value={{ gameInfo: gameInfo, setGameInfo: setGameInfo }}
      >
        <ConfigContext.Provider
          value={{ configInfo: configInfo, setConfigInfo: setConfigInfo }}
        >
          {!configInfo.hideConfig && <OverlayConfig />}
          {configInfo.hideConfig && <Overlay />}
        </ConfigContext.Provider>
      </GameContext.Provider>
    </WebsocketContext.Provider>
  );
};
