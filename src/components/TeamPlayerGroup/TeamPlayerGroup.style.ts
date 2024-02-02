import { styled } from "styled-components";
import { TEAM_PLAYER_GROUP } from "../../constants/ComponentConstants";

export const TeamPlayerGroupWrapper = styled.div<{ isLeft: boolean }>`
  position: absolute;
  top: ${TEAM_PLAYER_GROUP.topOffset}px;
  left: ${(props) =>
    props.isLeft
      ? TEAM_PLAYER_GROUP.sideOffset.toString() + "px"
      : (
          1920 -
          (TEAM_PLAYER_GROUP.width + TEAM_PLAYER_GROUP.sideOffset)
        ).toString() + "px"};
`;
