import styled from "styled-components";
import { GOAL_REPLAY } from "../../constants/ComponentConstants";

export const GRWrapper = styled.div<{
  show: boolean;
  primary: string;
  secondary: string;
}>`
  position: absolute;
  left: 32.5%;
  top: 20px;
  border-radius: 0 0 8px 8px;
  height: ${GOAL_REPLAY.height}px;
  width: ${GOAL_REPLAY.width}px;
  background: ${(props) => props.primary};
  color: ${(props) => props.secondary};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  animation-duration: 10s;
  z-index: 1;
  border: 4px solid ${(props) => props.secondary};
  border-top: none;
  ${(props) => (props.show ? `animation-name: slidedown;` : ``)}
`;

export const GRLogo = styled.img`
  max-height: ${GOAL_REPLAY.height}px;
  max-width: ${GOAL_REPLAY.width}px;
`;

export const GRText = styled.p<{ animate: boolean }>`
  margin: 0;
  font-size: ${GOAL_REPLAY.scorer.fontSize}px;
  font-weight: 700;
  ${(props) =>
    props.animate
      ? `animation-delay: 3s; animation-duration: 7s; animation-name: growingtext;`
      : ``}
`;
