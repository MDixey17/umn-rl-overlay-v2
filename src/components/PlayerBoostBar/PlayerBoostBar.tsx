import { PLAYER_BOOST_BAR } from "../../constants/ComponentConstants";
import { BoostService } from "../../services/boostService";
import {
  BoostBarDefault,
  BoostBarSliding,
  BoostBarText,
  BoostBarTextWrapper,
  BoostBarWrapper,
} from "./PlayerBoostBar.style";

interface PlayerBoostBarProps {
  isLeft: boolean;
  playerName: string;
  boostAmount: number;
  index: number;
  primaryColor?: string;
  secondaryColor?: string;
}

export const PlayerBoostBar = ({
  isLeft,
  playerName,
  boostAmount,
  index,
  primaryColor,
  secondaryColor,
}: PlayerBoostBarProps) => {
  return (
    <BoostBarWrapper
      primary={primaryColor}
      secondary={secondaryColor}
      isLeft={isLeft}
      index={index}
    >
      <BoostBarTextWrapper>
        <BoostBarText isBoost={false}>{playerName}</BoostBarText>
        <BoostBarText isBoost>{boostAmount}</BoostBarText>
      </BoostBarTextWrapper>
      <BoostBarSliding
        color={secondaryColor}
        width={BoostService.getBoostBarWidth(
          boostAmount,
          PLAYER_BOOST_BAR.width
        )}
        index={index}
      />
      <BoostBarDefault index={index} />
    </BoostBarWrapper>
  );
};
