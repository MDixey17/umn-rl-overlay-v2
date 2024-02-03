import { styled } from "styled-components";
import { SCOREBUG_SERIES } from "../../../constants/ComponentConstants";

export const SeriesShape = styled.div<{
  isLeft: boolean;
  index: number;
  isWon: boolean;
  color: string;
  leftOffset?: number;
  topOffset?: number;
}>`
  position: absolute;
  top: ${SCOREBUG_SERIES.top}px;
  left: ${(props) =>
    props.isLeft
      ? SCOREBUG_SERIES.leftStart -
        props.index * SCOREBUG_SERIES.horizontalOffset
      : SCOREBUG_SERIES.rightStart +
        props.index * SCOREBUG_SERIES.horizontalOffset}px;
  height: ${SCOREBUG_SERIES.height}px;
  width: ${SCOREBUG_SERIES.width}px;
  background: ${(props) => (props.isWon ? props.color : "#777777")};
  transform: ${(props) => (props.isLeft ? "skew(40deg)" : "skew(-40deg)")};
  z-index: ${SCOREBUG_SERIES.zIndex};
  ${(props) =>
    props.leftOffset !== undefined && props.isLeft
      ? `left: ${
          props.leftOffset - props.index * SCOREBUG_SERIES.horizontalOffset
        }px;`
      : ""}
  ${(props) =>
    props.leftOffset !== undefined && !props.isLeft
      ? `left: ${
          props.leftOffset + props.index * SCOREBUG_SERIES.horizontalOffset
        }px;`
      : ""}
  ${(props) =>
    props.topOffset !== undefined ? `top: ${props.topOffset}px;` : ""}
`;
