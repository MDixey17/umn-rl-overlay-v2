import { styled } from "styled-components";
import { PLAYER_BOOST_CIRCLE } from "../../constants/ComponentConstants";

export const BoostCircleWrapper = styled.div`
  background-color: ${PLAYER_BOOST_CIRCLE.backgroundColor};
  position: absolute;
  bottom: ${PLAYER_BOOST_CIRCLE.bottom}px;
  right: ${PLAYER_BOOST_CIRCLE.right}px;
  height: ${(PLAYER_BOOST_CIRCLE.boostRing.thickness +
    PLAYER_BOOST_CIRCLE.innerCircle.radius) *
  2}px;
  width: ${(PLAYER_BOOST_CIRCLE.boostRing.thickness +
    PLAYER_BOOST_CIRCLE.innerCircle.radius) *
  2}px;
  margin: 0px auto;
  overflow: hidden;
  transform-origin: 0 0;

  svg > circle {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
`;

export const BoostInnerCircle = styled.circle``;

export const BoostCircleRing = styled.circle<{ dashOffset: number }>`
  stroke-dashoffset: ${(props) => props.dashOffset};
`;

export const BoostCircleDefaultRing = styled.circle`
  color: rgba(0, 0, 0, 0.5);
  stroke-dashoffset: 0;
`;

export const BoostCircleImage = styled.image`
  opacity: 0.3;
  object-fit: contain;
  z-index: 4;
`;

export const BoostCircleText = styled.text<{ fontSize: number }>`
  font-size: ${(props) => props.fontSize}px;
  text-shadow: 1px 1px 10px black;
  z-index: 5;
`;
