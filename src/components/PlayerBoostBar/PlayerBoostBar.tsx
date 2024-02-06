import { useContext } from "react";
import { PLAYER_BOOST_BAR } from "../../constants/ComponentConstants";
import { BoostService } from "../../services/boostService";
import {
  BoostBarDefault,
  BoostBarSliding,
  BoostBarText,
  BoostBarTextWrapper,
  BoostBarWrapper,
} from "./PlayerBoostBar.style";
import { ConfigContext } from "../../contexts/ConfigContext";

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
  const { configInfo } = useContext(ConfigContext);

  const startHex: string = isLeft
    ? configInfo.blue.secondary.substring(1)
    : configInfo.orange.secondary.substring(1);
  const endHex: string = "FF0000";

  const computeEndColor = (): string => {
    const ratio = boostAmount / 100;

    const toHex = (n: number) => {
      const nString = n.toString(16);
      return nString.length === 1 ? "0" + nString : nString;
    };

    const r = Math.ceil(
      parseInt(endHex.substring(0, 2), 16) * ratio +
        parseInt(startHex.substring(0, 2), 16) * (1 - ratio)
    );
    const g = Math.ceil(
      parseInt(endHex.substring(2, 4), 16) * ratio +
        parseInt(startHex.substring(2, 4), 16) * (1 - ratio)
    );
    const b = Math.ceil(
      parseInt(endHex.substring(4, 6), 16) * ratio +
        parseInt(startHex.substring(4, 6), 16) * (1 - ratio)
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
        startColor={startHex}
        endColor={computeEndColor()}
      />
      <BoostBarDefault index={index} />
    </BoostBarWrapper>
  );
};
