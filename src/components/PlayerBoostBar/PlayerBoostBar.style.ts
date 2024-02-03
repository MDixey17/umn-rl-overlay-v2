import { styled } from "styled-components";
import { PLAYER_BOOST_BAR } from "../../constants/ComponentConstants";

export const BoostBarWrapper = styled.div<{
  isLeft: boolean;
  index: number;
  primary?: string;
  secondary?: string;
}>`
  height: ${PLAYER_BOOST_BAR.height}px;
  width: ${PLAYER_BOOST_BAR.width}px;
  background: ${(props) => props.primary ?? "#000000"};
  color: ${(props) => props.secondary ?? "#FFFFFF"};
  font-size: ${PLAYER_BOOST_BAR.fontSize}px;
  margin-bottom: ${PLAYER_BOOST_BAR.bottomPadding}px;
`;

export const BoostBarDefault = styled.div<{ index: number }>`
  height: ${PLAYER_BOOST_BAR.boostBarHeight}px;
  width: ${PLAYER_BOOST_BAR.width}px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: ${(props) => props.index * 52.8 + 37}px;
`;

export const BoostBarSliding = styled.div<{
  width: number;
  index: number;
}>`
  height: ${PLAYER_BOOST_BAR.boostBarHeight}px;
  width: ${(props) => props.width}px;
  background: linear-gradient(to right, yellow, red);
  position: absolute;
  top: ${(props) => props.index * 52.8 + 37}px;
  z-index: 9999;
`;

export const BoostBarTextWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const BoostBarText = styled.p<{ isBoost: boolean }>`
  padding: 0;
  margin: 0;
  font-size: ${PLAYER_BOOST_BAR.fontSize}px;
  padding-left: ${(props) => (props.isBoost ? "0px" : "8px")};
  padding-right: ${(props) => (props.isBoost ? "8px" : "0px")};
  padding-top: 2px;
  padding-bottom: 2px;
`;
