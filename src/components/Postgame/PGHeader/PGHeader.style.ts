import { styled } from "styled-components";
import { POSTGAME } from "../../../constants/ComponentConstants";

export const HeaderWrapper = styled.div`
  position: absolute;
  top: ${POSTGAME.header.top}px;
  left: ${POSTGAME.header.leftPercentage}%;
  display: flex;
  flex-flow: row nowrap;
  width: ${POSTGAME.header.width}px;
  height: ${POSTGAME.header.height}px;
  justify-content: space-evenly;
  align-items: center;
  font-family: bahnschrift;
  text-align: center;
  font-size: ${POSTGAME.header.fontSize}px;
  font-weight: 700;
`;

export const HeaderScore = styled.p`
  margin: 0;
`;

export const HeaderImage = styled.img`
  height: ${POSTGAME.header.logoHeight}px;
  width: ${POSTGAME.header.logoWidth}px;
`;
