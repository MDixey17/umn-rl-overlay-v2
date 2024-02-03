import { useContext } from "react";
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
import { ConfigContext } from "../../contexts/ConfigContext";

interface PlayerStatCardProps {
  playerName: string;
  goals: number;
  assists: number;
  saves: number;
  shots: number;
  isBlue: boolean;
}

export const PlayerStatCard = ({
  playerName,
  goals,
  assists,
  saves,
  shots,
  isBlue,
}: PlayerStatCardProps) => {
  const { configInfo } = useContext(ConfigContext);
  const primaryColor = isBlue
    ? configInfo.blue.primary
    : configInfo.orange.primary;
  const secondaryColor = isBlue
    ? configInfo.blue.secondary
    : configInfo.orange.secondary;

  const isUMN = isBlue ? configInfo.blue.isUMN : configInfo.orange.isUMN;

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
