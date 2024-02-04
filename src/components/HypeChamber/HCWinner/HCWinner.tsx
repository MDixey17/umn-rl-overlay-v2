import { GameInfo } from "../../../models/contexts/GameInfo";
import HC_UMN_WINNER from "../../../assets/videos/HCWinner.mp4";
import HC_TRANSITION from "../../../assets/videos/HCLogo.mp4";
import { useEffect, useState } from "react";
import { Postgame } from "../../Postgame/Postgame";
import { HCSource, HCVideo, onHCVideoEnd } from "../HypeChamber.style";

interface HCWinnerProps {
  gameInfo: GameInfo | null;
  isUmnWinner: boolean;
}

export const HCWinner = ({ gameInfo, isUmnWinner }: HCWinnerProps) => {
  const [showPostgame, setShowPostgame] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(
      () => {
        setShowPostgame(true);
      },
      isUmnWinner ? 9800 : 3400
    );
  });

  return (
    <>
      {!showPostgame && (
        <HCVideo id="hc-winner" autoPlay onEnded={onHCVideoEnd}>
          <HCSource
            type="video/mp4"
            src={isUmnWinner ? HC_UMN_WINNER : HC_TRANSITION}
          />
        </HCVideo>
      )}
      {showPostgame && <Postgame show gameInfo={gameInfo} />}
    </>
  );
};
