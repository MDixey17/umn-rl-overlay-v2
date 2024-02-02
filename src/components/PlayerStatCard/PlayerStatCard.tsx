import { PLAYER_STATS_CARD } from "../../constants/ComponentConstants";
import {
  PlayerText,
  SecondaryBar,
  SecondaryBarText,
  StatCardWrapper,
  StatName,
  StatValue,
  StatWrapper,
} from "./PlayerStatCard.style";

interface PlayerStatCardProps {
  playerName: string;
  isUMN: boolean;
  goals: number;
  assists: number;
  saves: number;
  shots: number;
  primaryColor: string;
  secondaryColor: string;
}

export const PlayerStatCard = ({
  playerName,
  isUMN,
  goals,
  assists,
  saves,
  shots,
  primaryColor,
  secondaryColor,
}: PlayerStatCardProps) => {
  return (
    <StatCardWrapper primary={primaryColor} secondary={secondaryColor}>
      <PlayerText>{playerName}</PlayerText>
      <SecondaryBar primary={primaryColor} secondary={secondaryColor}>
        {isUMN && (
          <SecondaryBarText>
            UNIVERSITY OF MINNESOTA GOLDEN GOPHERS
          </SecondaryBarText>
        )}
      </SecondaryBar>
      <StatWrapper>
        <div>
          <StatName>GOALS</StatName>
          <StatValue>{goals}</StatValue>
        </div>
        <div style={{ marginLeft: `${PLAYER_STATS_CARD.stats.marginLeft}px` }}>
          <StatName>ASSISTS</StatName>
          <StatValue>{assists}</StatValue>
        </div>
        <div style={{ marginLeft: `${PLAYER_STATS_CARD.stats.marginLeft}px` }}>
          <StatName>SAVES</StatName>
          <StatValue>{saves}</StatValue>
        </div>
        <div style={{ marginLeft: `${PLAYER_STATS_CARD.stats.marginLeft}px` }}>
          <StatName>SHOTS</StatName>
          <StatValue>{shots}</StatValue>
        </div>
      </StatWrapper>
    </StatCardWrapper>
  );
};
