import { useContext } from "react";
import { ConfigContext } from "../../contexts/ConfigContext";
import {
  BroadcastCardName,
  BroadcastCardRole,
  BroadcastCardWrapper,
} from "./BroadcastCard.style";

interface BroadcastCardProps {
  hide: boolean;
}

export const BroadcastCard = ({ hide }: BroadcastCardProps) => {
  const { configInfo } = useContext(ConfigContext);

  const casters =
    configInfo.broadcastTeam.caster2 !== ""
      ? `${configInfo.broadcastTeam.caster1} & ${configInfo.broadcastTeam.caster2}`
      : `${configInfo.broadcastTeam.caster1}`;

  return (
    <BroadcastCardWrapper hide={hide}>
      <BroadcastCardRole>
        <i>Casters: </i>
        <BroadcastCardName>{casters}</BroadcastCardName>
      </BroadcastCardRole>
      <br />
      <br />
      <BroadcastCardRole>
        <i>Broadcaster: </i>
        <BroadcastCardName>
          {configInfo.broadcastTeam.broadcaster}
        </BroadcastCardName>
      </BroadcastCardRole>
    </BroadcastCardWrapper>
  );
};
