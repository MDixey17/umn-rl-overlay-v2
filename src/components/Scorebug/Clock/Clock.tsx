import { useContext } from "react";
import { ClockText, ClockTrapezoid } from "./Clock.style";
import { GameContext } from "../../../contexts/GameContext";
import { GameService } from "../../../services/gameService";

export const Clock = () => {
  const { gameInfo } = useContext(GameContext);
  return (
    <>
      <ClockTrapezoid />
      <ClockText isOt={gameInfo.isOt}>
        {GameService.getClockFromSeconds(gameInfo.timeRemaining, gameInfo.isOt)}
      </ClockText>
    </>
  );
};
