import { styled } from "styled-components";
import { LEAGUE_CARD } from "../../constants/ComponentConstants";

export const LeagueCardWrapper = styled.div`
  position: absolute;
  top: 260px;
  right: -4px;
  background: rgb(123, 0, 18);
  background: radial-gradient(circle, #5f0b2f 0%, rgba(27, 0, 4, 1) 100%);
  border: 4px solid #ffcd30;
  max-width: ${LEAGUE_CARD.wrapper.width}px;
  max-height: ${LEAGUE_CARD.wrapper.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px 0 0 8px;
`;

export const LeagueCardImage = styled.img`
  max-height: ${LEAGUE_CARD.image.maxHeight}px;
  width: auto;
  max-width: ${LEAGUE_CARD.image.maxWidth}px;
  padding: 16px;
`;
