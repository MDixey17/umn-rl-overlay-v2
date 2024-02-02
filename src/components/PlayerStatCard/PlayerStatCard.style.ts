import { styled } from "styled-components";
import {
  PLAYER_STATS_CARD,
  TEAM_PLAYER_GROUP,
} from "../../constants/ComponentConstants";

export const StatCardWrapper = styled.div<{
  primary: string;
  secondary: string;
}>`
  background: ${(props) => props.primary};
  color: ${(props) => props.secondary};
  position: absolute;
  left: ${TEAM_PLAYER_GROUP.sideOffset}px;
  bottom: 80px;
  height: ${PLAYER_STATS_CARD.height}px;
  width: ${PLAYER_STATS_CARD.width}px;
  font-family: bahnschrift;
  text-align: center;
`;

export const PlayerText = styled.p`
  font-size: ${PLAYER_STATS_CARD.playerName.fontSize}px;
  margin: 0;
  padding-top: 4px;
`;

export const SecondaryBar = styled.div<{
  primary: string;
  secondary: string;
}>`
  position: absolute;
  height: ${PLAYER_STATS_CARD.secondaryBar.height}px;
  width: ${PLAYER_STATS_CARD.width}px;
  background: ${(props) => props.secondary};
  color: ${(props) => props.primary};
`;

export const SecondaryBarText = styled.p`
  font-size: ${PLAYER_STATS_CARD.secondaryBar.fontSize}px;
  margin: 0;
  margin-top: 4px;
  font-weight: bold;
`;

export const StatWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: ${PLAYER_STATS_CARD.width}px;
`;

export const StatName = styled.p`
  font-size: ${PLAYER_STATS_CARD.stats.nameSize}px;
  margin: 0;
`;

export const StatValue = styled.p`
  font-size: ${PLAYER_STATS_CARD.stats.valueSize}px;
  margin: 0;
`;
