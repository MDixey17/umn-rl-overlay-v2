import { styled } from "styled-components";
import {
  SCOREBUG_CLOCK,
  SCOREBUG_TEAM,
} from "../../../constants/ComponentConstants";

export const TeamTrapezoid = styled.div<{
  isLeft: boolean;
  color: string;
}>`
  border-top: ${SCOREBUG_TEAM.borderTop}px solid ${(props) => props.color};
  border-left: ${SCOREBUG_TEAM.height}px solid transparent;
  border-right: ${SCOREBUG_TEAM.height}px solid transparent;
  height: 0;
  width: ${SCOREBUG_CLOCK.topWidth}px;
  position: absolute;
  left: ${(props) =>
    props.isLeft
      ? SCOREBUG_TEAM.leftTeam.leftPercentage
      : SCOREBUG_TEAM.rightTeam.leftPercentage}%;
  top: ${SCOREBUG_TEAM.top}px;
  z-index: 2;
`;

export const TeamSecondary = styled.div<{
  isLeft: boolean;
  color: string;
}>`
  border-top: ${SCOREBUG_TEAM.borderTop}px solid ${(props) => props.color};
  border-left: ${SCOREBUG_TEAM.height}px solid transparent;
  border-right: ${SCOREBUG_TEAM.height}px solid transparent;
  height: 0;
  width: ${SCOREBUG_CLOCK.topWidth}px;
  position: absolute;
  left: ${(props) =>
    props.isLeft
      ? SCOREBUG_TEAM.leftTeam.secondary.leftPercentage
      : SCOREBUG_TEAM.rightTeam.secondary.leftPercentage}%;
  top: ${SCOREBUG_TEAM.top}px;
  z-index: 2;
`;

export const TeamText = styled.p<{
  isLeft: boolean;
}>`
  position: absolute;
  font-size: ${SCOREBUG_TEAM.fontSize}px;
  left: ${(props) =>
    props.isLeft
      ? SCOREBUG_TEAM.leftTeam.text.leftPercentage
      : SCOREBUG_TEAM.rightTeam.text.leftPercentage}%;
  top: ${SCOREBUG_TEAM.textTop}px;
  color: white;
  z-index: 2;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
`;

export const TeamLogo = styled.img<{ isLeft: boolean }>`
  position: absolute;
  left: ${(props) =>
    props.isLeft
      ? SCOREBUG_TEAM.leftTeam.logo.leftPercentage
      : SCOREBUG_TEAM.rightTeam.logo.leftPercentage}%;
  top: ${SCOREBUG_TEAM.logoTop}px;
  height: ${SCOREBUG_TEAM.logoHeight}px;
  width: ${SCOREBUG_TEAM.logoWidth}px;
  z-index: 2;
`;
