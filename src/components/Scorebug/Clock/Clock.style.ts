import { styled } from "styled-components";
import {
  SCOREBUG_CLOCK,
  SCOREBUG_TEAM,
} from "../../../constants/ComponentConstants";

export const ClockTrapezoid = styled.div`
  border-top: ${SCOREBUG_CLOCK.borderTopWidth}px solid
    ${SCOREBUG_CLOCK.backgroundColor};
  border-left: ${SCOREBUG_TEAM.height}px solid transparent;
  border-right: ${SCOREBUG_TEAM.height}px solid transparent;
  height: ${SCOREBUG_CLOCK.height};
  width: ${SCOREBUG_CLOCK.topWidth}px;
  position: absolute;
  left: ${SCOREBUG_CLOCK.leftPercentage}%;
  top: ${SCOREBUG_CLOCK.topOffset}px;
  z-index: ${SCOREBUG_CLOCK.zIndex};
`;

export const ClockText = styled.p<{ isOt: boolean }>`
  font-size: ${(props) =>
    props.isOt ? SCOREBUG_CLOCK.overtime.fontSize : SCOREBUG_CLOCK.fontSize}px;
  position: absolute;
  left: ${SCOREBUG_CLOCK.text.leftPercentage}%;
  top: ${(props) =>
    props.isOt ? SCOREBUG_CLOCK.overtime.topOffset : SCOREBUG_CLOCK.text.top}px;
  color: white;
  z-index: ${SCOREBUG_CLOCK.text.zIndex};
`;
