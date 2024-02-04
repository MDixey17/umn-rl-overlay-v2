import { styled } from "styled-components";
import RLMaroon from "../../assets/images/rl_maroon.png";
import { POSTGAME } from "../../constants/ComponentConstants";

export const PostgameWrapper = styled.div`
  color: white;
  text-align: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${RLMaroon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${POSTGAME.height}px;
  width: ${POSTGAME.width}px;
`;
