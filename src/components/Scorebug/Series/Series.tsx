import { useContext } from "react";
import { ConfigContext } from "../../../contexts/ConfigContext";
import { SeriesShape } from "./Series.style";
import { GameContext } from "../../../contexts/GameContext";
import { GameService } from "../../../services/gameService";

interface SeriesProps {
  isLeft: boolean;
  leftOffset?: number;
  topOffset?: number;
}

export const Series = ({ isLeft, leftOffset, topOffset }: SeriesProps) => {
  const { gameInfo } = useContext(GameContext);
  const { configInfo } = useContext(ConfigContext);
  const primaryColor = isLeft
    ? configInfo.blue.primary
    : configInfo.orange.primary;
  const secondaryColor = isLeft
    ? configInfo.blue.secondary
    : configInfo.orange.secondary;

  return (
    <>
      {[...Array(GameService.getRequiredWins(configInfo.seriesLength))].map(
        (_, indx) => {
          return (
            <SeriesShape
              isLeft={isLeft}
              index={indx}
              isWon={
                (isLeft ? gameInfo.series.blue : gameInfo.series.orange) - 1 >=
                indx
              }
              primary={primaryColor}
              secondary={secondaryColor}
              leftOffset={leftOffset}
              topOffset={topOffset}
            />
          );
        }
      )}
    </>
  );
};
