import { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";
import { TeamLogo, TeamSecondary, TeamText, TeamTrapezoid } from "./Team.style";
import { ConfigContext } from "../../../contexts/ConfigContext";

interface TeamProps {
  isLeft: boolean;
}

export const Team = ({ isLeft }: TeamProps) => {
  const { gameInfo } = useContext(GameContext);
  const { configInfo } = useContext(ConfigContext);

  const secondaryColor = isLeft
    ? configInfo.blue.secondary
    : configInfo.orange.secondary;
  const primaryColor = isLeft
    ? configInfo.blue.primary
    : configInfo.orange.primary;
  const score = isLeft ? gameInfo.score.blue : gameInfo.score.orange;
  return (
    <>
      <TeamSecondary isLeft={isLeft} color={secondaryColor} />
      <TeamTrapezoid isLeft={isLeft} color={primaryColor} />
      <TeamText isLeft={isLeft}>{score}</TeamText>
      <TeamLogo
        isLeft={isLeft}
        src={isLeft ? configInfo.blue.avatar : configInfo.orange.avatar}
      />
    </>
  );
};
