import { styled } from "styled-components";
import { POSTGAME } from "../../../constants/ComponentConstants";

export const TeamWrapper = styled.div<{ isLeft: boolean }>`
  position: absolute;
  left: ${(props) =>
    props.isLeft
      ? POSTGAME.columnWrapper.blue.left
      : POSTGAME.columnWrapper.orange.left}px;
  top: ${POSTGAME.columnWrapper.top}px;
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  justify-content: space-evenly;
  height: 702px;
  width: 700px;
`;

export const TeamPlayerColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const PlayerNameText = styled.p`
  font-size: ${POSTGAME.playerText.fontSize}px;
  font-weight: ${POSTGAME.playerText.fontWeight};
  margin: ${POSTGAME.playerText.margin}px;
`;

export const PlayerStatText = styled.p`
  font-size: ${POSTGAME.statText.fontSize}px;
  font-weight: ${POSTGAME.statText.fontWeight};
  margin: ${POSTGAME.statText.margin}px;
`;
