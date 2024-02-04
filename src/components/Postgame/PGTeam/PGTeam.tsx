import { USPlayer } from "../../../models/UpdateState/USPlayer";
import { GameService } from "../../../services/gameService";
import {
  PlayerNameText,
  PlayerStatText,
  TeamPlayerColumn,
  TeamWrapper,
} from "./PGTeam.style";

interface PGTeamProps {
  isLeft: boolean;
  plyers: USPlayer[];
}

export const PGTeam = ({ isLeft, plyers }: PGTeamProps) => {
  const players = isLeft
    ? GameService.getBlueTeam(plyers)
    : GameService.getOrangeTeam(plyers);

  return (
    <TeamWrapper isLeft={isLeft}>
      {players.map((player) => (
        <TeamPlayerColumn>
          <PlayerNameText>{player.name.toUpperCase()}</PlayerNameText>
          <PlayerStatText>{player.score}</PlayerStatText>
          <PlayerStatText>{player.goals}</PlayerStatText>
          <PlayerStatText>{player.assists}</PlayerStatText>
          <PlayerStatText>{player.shots}</PlayerStatText>
          <PlayerStatText>{player.saves}</PlayerStatText>
          <PlayerStatText>{player.demos}</PlayerStatText>
        </TeamPlayerColumn>
      ))}
    </TeamWrapper>
  );
};
