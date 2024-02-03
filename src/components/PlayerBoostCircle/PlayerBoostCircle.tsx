import { useContext } from "react";
import { PLAYER_BOOST_CIRCLE } from "../../constants/ComponentConstants";
import { BoostService } from "../../services/boostService";
import {
  BoostCircleDefaultRing,
  BoostCircleImage,
  BoostCircleRing,
  BoostCircleText,
  BoostCircleWrapper,
  BoostInnerCircle,
} from "./PlayerBoostCircle.style";
import { ConfigContext } from "../../contexts/ConfigContext";

interface PlayerBoostCircleProps {
  boost: number;
  isBlue: boolean;
}

export const PlayerBoostCircle = ({
  boost,
  isBlue,
}: PlayerBoostCircleProps) => {
  const { configInfo } = useContext(ConfigContext);
  const primaryColor = isBlue
    ? configInfo.blue.primary
    : configInfo.orange.primary;
  const secondaryColor = isBlue
    ? configInfo.blue.secondary
    : configInfo.orange.secondary;
  const logo = isBlue ? configInfo.blue.avatar : configInfo.orange.avatar;
  const circumference = BoostService.getCircumference();
  const normalizedRadius = BoostService.getNormalizedRadius();

  return (
    <BoostCircleWrapper>
      <svg
        height={PLAYER_BOOST_CIRCLE.innerCircle.radius * 2}
        width={PLAYER_BOOST_CIRCLE.innerCircle.radius * 2}
      >
        <BoostCircleDefaultRing
          stroke="#00000088"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeWidth={PLAYER_BOOST_CIRCLE.boostRing.thickness}
          fill="transparent"
          r={normalizedRadius}
          cx={PLAYER_BOOST_CIRCLE.innerCircle.radius}
          cy={PLAYER_BOOST_CIRCLE.innerCircle.radius}
        />
        <BoostCircleRing
          stroke={secondaryColor}
          strokeDasharray={`${circumference} ${circumference}`}
          dashOffset={BoostService.getBoostBarCircumference(
            boost,
            circumference
          )}
          strokeWidth={PLAYER_BOOST_CIRCLE.boostRing.thickness}
          fill="transparent"
          r={normalizedRadius}
          cx={PLAYER_BOOST_CIRCLE.innerCircle.radius}
          cy={PLAYER_BOOST_CIRCLE.innerCircle.radius}
        />
        <BoostInnerCircle
          color={primaryColor}
          cx="50%"
          cy="50%"
          r={normalizedRadius - PLAYER_BOOST_CIRCLE.boostRing.thickness / 2}
          fill={primaryColor}
        />
        <BoostCircleImage
          href={logo}
          height={PLAYER_BOOST_CIRCLE.innerCircle.logoHeight}
          width={PLAYER_BOOST_CIRCLE.innerCircle.logoWidth}
          x={(PLAYER_BOOST_CIRCLE.innerCircle.radius + 36) / 2}
          y={(PLAYER_BOOST_CIRCLE.innerCircle.radius + 36) / 2}
        />
        <BoostCircleText
          fontSize={PLAYER_BOOST_CIRCLE.innerCircle.fontSize}
          x="50%"
          y="50%"
          textAnchor="middle"
          fill={secondaryColor}
          dy=".3em"
        >
          {boost}
        </BoostCircleText>
      </svg>
    </BoostCircleWrapper>
  );
};
