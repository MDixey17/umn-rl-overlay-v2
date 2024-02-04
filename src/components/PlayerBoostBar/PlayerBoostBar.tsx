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
  const computeEndColor = (): string => {
    const yellowHex: string = "FFFF00";
    const redHex: string = "FF0000";
    const ratio = boostAmount / 100;

    const toHex = (n: number) => {
      const nString = n.toString(16);
      return nString.length === 1 ? "0" + nString : nString;
    };

    const r = Math.ceil(
      parseInt(redHex.substring(0, 2), 16) * ratio +
        parseInt(yellowHex.substring(0, 2), 16) * (1 - ratio)
    );
    const g = Math.ceil(
      parseInt(redHex.substring(2, 4), 16) * ratio +
        parseInt(yellowHex.substring(2, 4), 16) * (1 - ratio)
    );
    const b = Math.ceil(
      parseInt(redHex.substring(4, 6), 16) * ratio +
        parseInt(yellowHex.substring(4, 6), 16) * (1 - ratio)
    );

    return "#" + toHex(r) + toHex(g) + toHex(b);
  };

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
        width={BoostService.getBoostBarWidth(
          boostAmount,
          PLAYER_BOOST_BAR.width
        )}
        index={index}
        endColor={computeEndColor()}
      />
      <BoostBarDefault index={index} />
    </BoostBarWrapper>
  );
};
