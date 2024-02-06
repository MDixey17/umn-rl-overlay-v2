import { styled } from "styled-components";
import RLMaroon from "../../assets/images/rl_maroon.png";
import { POSTGAME } from "../../constants/ComponentConstants";

export const PostgameWrapper = styled.div`
  color: white;
  text-align: center;
  height: ${POSTGAME.height}px;
  width: ${POSTGAME.width}px;
`;

export const PostgameBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${RLMaroon}) 0% 0% space;
  animation: bgslide 10s linear infinite;
`;
