import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { GameService } from "../../services/gameService";
import { TeamPlayerGroupWrapper } from "./TeamPlayerGroup.style";
import { USPlayer } from "../../models/UpdateState/USPlayer";
import { PlayerBoostBar } from "../PlayerBoostBar/PlayerBoostBar";
import { ConfigContext } from "../../contexts/ConfigContext";

interface TeamPlayerGroupProps {
  isLeft: boolean;
}

export const TeamPlayerGroup = ({ isLeft }: TeamPlayerGroupProps) => {
  const { gameInfo } = useContext(GameContext);
  const { configInfo } = useContext(ConfigContext);

  const DEFAULT_COLOR = "#333333";
  const DEFAULT_TEXT_COLOR = "#FFFFFF";

  const spectatedPlayer = GameService.getPlayerFromTarget(
    gameInfo.players,
    gameInfo.target
  );

  const players = isLeft
    ? GameService.getBlueTeam(gameInfo.players)
    : GameService.getOrangeTeam(gameInfo.players);

  const isSpectatedPlayer = (player: USPlayer): boolean => {
    return (
      spectatedPlayer !== undefined && player.name === spectatedPlayer.name
    );
  };

  return (
    <TeamPlayerGroupWrapper isLeft={isLeft}>
      {players.map((player: USPlayer, index) => (
        <PlayerBoostBar
          isLeft={isLeft}
          playerName={player.name}
          boostAmount={player.boost}
          primaryColor={
            isSpectatedPlayer(player)
              ? isLeft
                ? configInfo.blue.primary
                : configInfo.orange.primary
              : DEFAULT_COLOR
          }
          secondaryColor={
            isSpectatedPlayer(player)
              ? isLeft
                ? configInfo.blue.secondary
                : configInfo.orange.secondary
              : DEFAULT_TEXT_COLOR
          }
          index={index}
        />
      ))}
    </TeamPlayerGroupWrapper>
  );
};
