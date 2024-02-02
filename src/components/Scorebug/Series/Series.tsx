import {
  DEFAULT_BLUE_COLORS,
  DEFAULT_ORANGE_COLORS,
} from "../../../constants/ComponentConstants";
import { SeriesShape } from "./Series.style";

interface SeriesProps {
  isLeft: boolean;
  leftOffset?: number;
  topOffset?: number;
}

export const Series = ({ isLeft, leftOffset, topOffset }: SeriesProps) => {
  const color = isLeft
    ? DEFAULT_BLUE_COLORS.secondary
    : DEFAULT_ORANGE_COLORS.secondary;
  return (
    <>
      {[...Array(5)].map((_, indx) => {
        return (
          <SeriesShape
            isLeft={isLeft}
            index={indx}
            isWon={2 - 1 >= indx}
            color={color}
            leftOffset={leftOffset}
            topOffset={topOffset}
          />
        );
      })}
    </>
  );
};
