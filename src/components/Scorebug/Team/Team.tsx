import { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";
import { TeamLogo, TeamSecondary, TeamText, TeamTrapezoid } from "./Team.style";
import {
  DEFAULT_BLUE_COLORS,
  DEFAULT_ORANGE_COLORS,
} from "../../../constants/ComponentConstants";

interface TeamProps {
  isLeft: boolean;
}

export const Team = ({ isLeft }: TeamProps) => {
  const { gameInfo } = useContext(GameContext);
  const secondaryColor = isLeft
    ? DEFAULT_BLUE_COLORS.secondary
    : DEFAULT_ORANGE_COLORS.secondary;
  const primaryColor = isLeft
    ? DEFAULT_BLUE_COLORS.primary
    : DEFAULT_ORANGE_COLORS.primary;
  const score = isLeft ? gameInfo.score.blue : gameInfo.score.orange;
  return (
    <>
      <TeamSecondary isLeft={isLeft} color={secondaryColor} />
      <TeamTrapezoid isLeft={isLeft} color={primaryColor} />
      <TeamText isLeft={isLeft}>{score}</TeamText>
      <TeamLogo isLeft={isLeft} />
    </>
  );
};
