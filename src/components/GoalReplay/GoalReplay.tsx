import { useContext } from "react";
import { ConfigContext } from "../../contexts/ConfigContext";
import { GRLogo, GRText, GRWrapper } from "./GoalReplay.style";

interface GoalReplayProps {
  show: boolean;
  team?: number;
  scorer?: string;
  isNull: boolean;
}

export const GoalReplay = ({ show, team, scorer, isNull }: GoalReplayProps) => {
  const { configInfo } = useContext(ConfigContext);

  // If no goal has been scored, don't queue the animation
  if (isNull) {
    return <></>;
  }

  return (
    <GRWrapper
      show={show}
      primary={team === 0 ? configInfo.blue.primary : configInfo.orange.primary}
      secondary={
        team === 0 ? configInfo.blue.secondary : configInfo.orange.secondary
      }
    >
      <GRLogo
        src={team === 0 ? configInfo.blue.avatar : configInfo.orange.avatar}
      />
      <GRText animate={show}>{scorer}</GRText>
    </GRWrapper>
  );
};
