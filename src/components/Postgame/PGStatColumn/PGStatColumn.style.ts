import { styled } from "styled-components";
import { POSTGAME } from "../../../constants/ComponentConstants";

export const StatColumnWrapper = styled.div`
  position: absolute;
  left: ${POSTGAME.statNameColumn.left}px;
  top: ${POSTGAME.statNameColumn.top}px;
  height: ${POSTGAME.statNameColumn.height}px;
  width: ${POSTGAME.statNameColumn.width}px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const StatColumnText = styled.p`
  border-bottom: ${POSTGAME.statNameColumn.borderBottomSize}px solid grey;
  font-size: ${POSTGAME.statNameColumn.fontSize}px;
  font-weight: ${POSTGAME.statNameColumn.fontWeight};
  margin: ${POSTGAME.statNameColumn.textMargin};
  text-align: center;
`;
