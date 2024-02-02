import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { GameService } from "../../services/gameService";
import {
  DEFAULT_BLUE_COLORS,
  DEFAULT_ORANGE_COLORS,
} from "../../constants/ComponentConstants";
import { TeamPlayerGroupWrapper } from "./TeamPlayerGroup.style";
import { USPlayer } from "../../models/UpdateState/USPlayer";
import { PlayerBoostBar } from "../PlayerBoostBar/PlayerBoostBar";

interface TeamPlayerGroupProps {
  isLeft: boolean;
}

// TODO: we can use the current target to determine which colors to pass
export const TeamPlayerGroup = ({ isLeft }: TeamPlayerGroupProps) => {
  const { gameInfo } = useContext(GameContext);
  const players = isLeft
    ? GameService.getBlueTeam(gameInfo.players)
    : GameService.getOrangeTeam(gameInfo.players);
  const primary = isLeft
    ? DEFAULT_BLUE_COLORS.primary
    : DEFAULT_ORANGE_COLORS.primary;
  const secondary = isLeft
    ? DEFAULT_BLUE_COLORS.secondary
    : DEFAULT_ORANGE_COLORS.secondary;

  return (
    <TeamPlayerGroupWrapper isLeft={isLeft}>
      {players.map((player: USPlayer, index) => (
        <PlayerBoostBar
          isLeft={isLeft}
          playerName={player.name}
          boostAmount={player.boost}
          primaryColor={primary}
          secondaryColor={secondary}
          index={index}
        />
      ))}
    </TeamPlayerGroupWrapper>
  );
};
