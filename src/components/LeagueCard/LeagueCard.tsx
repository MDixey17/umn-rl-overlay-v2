import { useContext } from "react";
import { LeagueCardImage, LeagueCardWrapper } from "./LeagueCard.style";
import { ConfigContext } from "../../contexts/ConfigContext";

export const LeagueCard = () => {
  const { configInfo } = useContext(ConfigContext);

  return (
    <LeagueCardWrapper>
      <LeagueCardImage src={configInfo.leagueAvatar} />
    </LeagueCardWrapper>
  );
};
