import { GameInfo } from "../../models/contexts/GameInfo";
import { PGHeader } from "./PGHeader/PGHeader";
import { PGStatColumn } from "./PGStatColumn/PGStatColumn";
import { PGTeam } from "./PGTeam/PGTeam";
import { PostgameBackground, PostgameWrapper } from "./Postgame.style";

interface PostgameProps {
  show: boolean;
  gameInfo: GameInfo | null;
}

export const Postgame = ({ show, gameInfo }: PostgameProps) => {
  if (gameInfo === null) {
    return <></>;
  }
  return (
    <>
      {show && (
        <PostgameWrapper>
          <PostgameBackground />
          <PGHeader
            blueScore={gameInfo.score.blue}
            orangeScore={gameInfo.score.orange}
          />
          <PGTeam isLeft plyers={gameInfo.players} />
          <PGStatColumn />
          <PGTeam isLeft={false} plyers={gameInfo.players} />
        </PostgameWrapper>
      )}
    </>
  );
};
