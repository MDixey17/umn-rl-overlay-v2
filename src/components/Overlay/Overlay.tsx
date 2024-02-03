import { useContext, useEffect, useState } from "react";
import { WebsocketContext } from "../../contexts/WebsocketContext";
import { GameContext } from "../../contexts/GameContext";
import { UpdateState } from "../../models/UpdateState/UpdateState";
import { USPlayer } from "../../models/UpdateState/USPlayer";
import { BallHit } from "../../models/BallHit/BallHit";
import { StatfeedEvent } from "../../models/StatfeedEvent/StatfeedEvent";
import {
  ASSIST_EVENT,
  DEMO_EVENT,
  EPIC_SAVE_EVENT,
  GOAL_EVENT,
  LONG_GOAL_EVENT,
  MVP_EVENT,
  SAVE_EVENT,
  SHOT_EVENT,
  WIN_EVENT,
} from "../../constants/GameConstants";
import { GoalScored } from "../../models/GoalScored/GoalScored";
import { MatchEnded } from "../../models/MatchEnded/MatchEnded";
import { Scorebug } from "../Scorebug/Scorebug";
import { TeamPlayerGroup } from "../TeamPlayerGroup/TeamPlayerGroup";
import { GameService } from "../../services/gameService";
import { PlayerBoostCircle } from "../PlayerBoostCircle/PlayerBoostCircle";
import { PlayerStatCard } from "../PlayerStatCard/PlayerStatCard";
import { ConfigContext } from "../../contexts/ConfigContext";
import { LeagueCard } from "../LeagueCard/LeagueCard";
import { BroadcastCard } from "../BroadcastCard/BroadcastCard";

export const Overlay = () => {
  const websocket = useContext(WebsocketContext);
  const { gameInfo, setGameInfo } = useContext(GameContext);
  const { configInfo } = useContext(ConfigContext);

  // State variables
  const [hasSetWinner, setHasSetWinner] = useState<boolean>(false);
  const [showPodium, setShowPodium] = useState<boolean>(false);

  // Local variables
  const spectatedPlayer = GameService.getPlayerFromTarget(
    gameInfo.players,
    gameInfo.target
  );

  useEffect(() => {
    // Match Created
    websocket.subscribe("game", "match_created", (data: string) => {
      console.log("Match Created: ", data);
      if (!hasSetWinner) {
        setHasSetWinner(false);
      }
    });

    // Initialized
    websocket.subscribe("game", "initialized", (data: string) => {
      console.log("Initialized: ", data);
    });

    // Pre Countdown Begin
    websocket.subscribe("game", "pre_countdown_begin", (data: string) => {
      console.log("Pre Countdown Begin: ", data);
      setShowPodium(false);
    });

    // Post Countdown Begin
    websocket.subscribe("game", "post_countdown_begin", (data: string) => {
      console.log("Post Countdown Begin: ", data);
    });

    // Update State
    websocket.subscribe("game", "update_state", (data: UpdateState) => {
      setGameInfo({
        arena: data.game.arena,
        isOt: data.game.isOT,
        isReplay: data.game.isReplay,
        target: data.game.target,
        timeRemaining: data.game.time_seconds,
        winner: data.game.winner,
        players: Object.values(data.players).map((player: USPlayer) => player),
        score: {
          blue: data.game.teams[0].score,
          orange: data.game.teams[1].score,
        },
        series: {
          blue: gameInfo.series.blue,
          orange: gameInfo.series.orange,
        },
      });
    });

    // Ball Hit
    websocket.subscribe("game", "ball_hit", (data: BallHit) => {
      console.log("Ball Hit: ", data);
    });

    // Statfeed Event
    websocket.subscribe("game", "statfeed_event", (data: StatfeedEvent) => {
      if (data.event_name === GOAL_EVENT) {
        console.log("Statfeed - Goal Event: ", data);
      } else if (data.event_name === ASSIST_EVENT) {
        console.log("Statfeed - Assist Event: ", data);
      } else if (data.event_name === SHOT_EVENT) {
        console.log("Statfeed - Shot Event: ", data);
      } else if (data.event_name === SAVE_EVENT) {
        console.log("Statfeed - Save Event: ", data);
      } else if (data.event_name === EPIC_SAVE_EVENT) {
        console.log("Statfeed - Epic Save Event: ", data);
      } else if (data.event_name === WIN_EVENT) {
        console.log("Statfeed - Win Event: ", data);
      } else if (data.event_name === MVP_EVENT) {
        console.log("Statfeed - MVP Event: ", data);
      } else if (data.event_name === LONG_GOAL_EVENT) {
        console.log("Statfeed - Long Goal Event: ", data);
      } else if (data.event_name === DEMO_EVENT) {
        console.log("Statfeed - Demolish Event: ", data);
      } else {
        console.log("Statfeed - Unknown Event: ", data);
      }
    });

    // Goal Scored
    websocket.subscribe("game", "goal_scored", (data: GoalScored) => {
      console.log("Goal Scored: ", data);
    });

    // Replay Start
    websocket.subscribe("game", "replay_start", (data: string) => {
      console.log("Replay Start: ", data);
    });

    // Replay Will End
    websocket.subscribe("game", "replay_will_end", (data: string) => {
      console.log("Replay Will End: ", data);
    });

    // Replay End
    websocket.subscribe("game", "replay_end", (data: string) => {
      console.log("Replay End: ", data);
    });

    // Match Ended
    websocket.subscribe("game", "match_ended", (data: MatchEnded) => {
      console.log("Match Ended: ", data);
      if (!hasSetWinner) {
        if (data.winner_team_num === 0) {
          // Blue team won
          setGameInfo({
            ...gameInfo,
            series: {
              ...gameInfo.series,
              blue: gameInfo.series.blue + 1,
            },
          });
        } else {
          // Orange team won
          setGameInfo({
            ...gameInfo,
            series: {
              ...gameInfo.series,
              orange: gameInfo.series.orange + 1,
            },
          });
        }
        setHasSetWinner(true);
      }
    });

    // Podium Start
    websocket.subscribe("game", "podium_start", (data: string) => {
      console.log("Podium Start: ", data);
      setShowPodium(true);
    });

    // Match Destroyed
    websocket.subscribe("game", "match_destroyed", (data: string) => {
      console.log("Match Destroyed: ", data);
    });
  });

  const hasBroadcastTeam: boolean =
    configInfo.broadcastTeam.broadcaster !== "" &&
    (configInfo.broadcastTeam.caster1 !== "" ||
      configInfo.broadcastTeam.caster2 !== "");

  const hideBroadcastTeam: boolean =
    gameInfo.timeRemaining < 290 ||
    gameInfo.score.blue > 1 ||
    gameInfo.score.orange > 1;

  return (
    <>
      {!showPodium && !hasSetWinner && (
        <>
          <TeamPlayerGroup isLeft />
          <TeamPlayerGroup isLeft={false} />
          <Scorebug />
          {configInfo.leagueAvatar !== "" && <LeagueCard />}
          {hasBroadcastTeam && <BroadcastCard hide={hideBroadcastTeam} />}
          {!gameInfo.isReplay && spectatedPlayer && (
            <>
              <PlayerBoostCircle
                boost={spectatedPlayer.boost}
                isBlue={spectatedPlayer.team === 0}
              />
              <PlayerStatCard
                playerName={spectatedPlayer.name}
                goals={spectatedPlayer.goals}
                assists={spectatedPlayer.assists}
                saves={spectatedPlayer.saves}
                shots={spectatedPlayer.shots}
                isBlue={spectatedPlayer.team === 0}
              />
            </>
          )}
          {gameInfo.isReplay && <></>}
        </>
      )}
    </>
  );
};
