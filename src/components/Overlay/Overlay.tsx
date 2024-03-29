import { useContext, useEffect, useState } from "react";
import { WebsocketContext } from "../../contexts/WebsocketContext";
import { GameContext } from "../../contexts/GameContext";
import { UpdateState } from "../../models/UpdateState/UpdateState";
import { USPlayer } from "../../models/UpdateState/USPlayer";
// import { BallHit } from "../../models/BallHit/BallHit";
// import { StatfeedEvent } from "../../models/StatfeedEvent/StatfeedEvent";
// import {
//   ASSIST_EVENT,
//   DEMO_EVENT,
//   EPIC_SAVE_EVENT,
//   GOAL_EVENT,
//   LONG_GOAL_EVENT,
//   MVP_EVENT,
//   SAVE_EVENT,
//   SHOT_EVENT,
//   WIN_EVENT,
// } from "../../constants/GameConstants";
// import { GoalScored } from "../../models/GoalScored/GoalScored";
import { MatchEnded } from "../../models/MatchEnded/MatchEnded";
import { Scorebug } from "../Scorebug/Scorebug";
import { TeamPlayerGroup } from "../TeamPlayerGroup/TeamPlayerGroup";
import { GameService } from "../../services/gameService";
import { PlayerBoostCircle } from "../PlayerBoostCircle/PlayerBoostCircle";
import { PlayerStatCard } from "../PlayerStatCard/PlayerStatCard";
import { ConfigContext } from "../../contexts/ConfigContext";
import { LeagueCard } from "../LeagueCard/LeagueCard";
import { BroadcastCard } from "../BroadcastCard/BroadcastCard";
import { GameInfo } from "../../models/contexts/GameInfo";
import { HCWinner } from "../HypeChamber/HCWinner/HCWinner";
import { HCTransition } from "../HypeChamber/HCTransition/HCTransition";
import { GoalReplay } from "../GoalReplay/GoalReplay";
import { GoalScored } from "../../models/GoalScored/GoalScored";
import { OverlayWrapper } from "./Overlay.style";

export const Overlay = () => {
  const websocket = useContext(WebsocketContext);
  const { gameInfo, setGameInfo } = useContext(GameContext);
  const { configInfo } = useContext(ConfigContext);

  // State variables
  const [hasSetWinner, setHasSetWinner] = useState<boolean>(false);
  const [showPodium, setShowPodium] = useState<boolean>(false);
  const [matchSave, setMatchSave] = useState<GameInfo | null>(null);
  const [isUmnWinner, setUmnWinner] = useState<boolean>(false);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [isNewGame, setNewGame] = useState<boolean>(false);
  const [goal, setGoal] = useState<GoalScored | null>(null);
  const [isReplay, setIsReplay] = useState<boolean>(false);
  const [showTransition, setShowTransition] = useState<boolean>(false);

  // Local variables
  const spectatedPlayer = GameService.getPlayerFromTarget(
    gameInfo.players,
    gameInfo.target
  );

  useEffect(() => {
    if (isNewGame) {
      setShowOverlay(true);
      setNewGame(false);
    }
  }, [isNewGame]);

  useEffect(() => {
    // Match Created - first load into game, kickoff countdown NOT started
    // websocket.subscribe("game", "match_created", (data: string) => {
    //   console.log("Match Created: ", data);
    // });

    // Initialized - Game, not just loading in
    // websocket.subscribe("game", "initialized", (data: string) => {
    //   // console.log("Initialized: ", data);
    //   setShowTransition(true);
    //   setTimeout(() => {
    //     setNewGame(true);
    //     setShowPodium(false);
    //     setShowTransition(false);
    //   }, 2000);
    // });

    // Pre Countdown Begin - buffer time before kickoff - when game is waiting for players to join teams evenly
    // websocket.subscribe("game", "pre_countdown_begin", (data: string) => {
    //   // console.log("Pre Countdown Begin: ", data);
    // });

    // Post Countdown Begin - kickoff timer
    websocket.subscribe("game", "post_countdown_begin", (data: string) => {
      // console.log("Post Countdown Begin: ", data);
      if (
        !showTransition &&
        (gameInfo.series.blue > 0 || gameInfo.series.orange > 0)
      ) {
        setShowTransition(true);
        setTimeout(() => {
          setNewGame(true);
          setShowPodium(false);
        }, 2500);
      } else {
        setTimeout(() => {
          setNewGame(true);
        }, 2500);
      }
      setTimeout(() => {
        if (hasSetWinner) {
          setHasSetWinner(false);
          setMatchSave(null);
        }
        if (isReplay) {
          setIsReplay(false);
        }
      }, 3500);
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

    // // Ball Hit
    // websocket.subscribe("game", "ball_hit", (data: BallHit) => {
    //   // console.log("Ball Hit: ", data);
    // });

    // // Statfeed Event
    // websocket.subscribe("game", "statfeed_event", (data: StatfeedEvent) => {
    //   if (data.event_name === GOAL_EVENT) {
    //     // console.log("Statfeed - Goal Event: ", data);
    //   } else if (data.event_name === ASSIST_EVENT) {
    //     // console.log("Statfeed - Assist Event: ", data);
    //   } else if (data.event_name === SHOT_EVENT) {
    //     // console.log("Statfeed - Shot Event: ", data);
    //   } else if (data.event_name === SAVE_EVENT) {
    //     // console.log("Statfeed - Save Event: ", data);
    //   } else if (data.event_name === EPIC_SAVE_EVENT) {
    //     // console.log("Statfeed - Epic Save Event: ", data);
    //   } else if (data.event_name === WIN_EVENT) {
    //     // console.log("Statfeed - Win Event: ", data);
    //   } else if (data.event_name === MVP_EVENT) {
    //     // console.log("Statfeed - MVP Event: ", data);
    //   } else if (data.event_name === LONG_GOAL_EVENT) {
    //     // console.log("Statfeed - Long Goal Event: ", data);
    //   } else if (data.event_name === DEMO_EVENT) {
    //     // console.log("Statfeed - Demolish Event: ", data);
    //   } else {
    //     console.log("Statfeed - Unknown Event: ", data);
    //   }
    // });

    // Goal Scored
    websocket.subscribe("game", "goal_scored", (data: GoalScored) => {
      setGoal(data);
    });

    // Replay Start
    websocket.subscribe("game", "replay_start", (data: string) => {
      // console.log("Replay Start: ", data);
      if (!isReplay) {
        setIsReplay(true);
      }
    });

    // // Replay Will End - triggers when the goal in the replay occurs
    // websocket.subscribe("game", "replay_will_end", (data: string) => {
    //   // console.log("Replay Will End: ", data);
    // });

    // // Replay End - triggers when replay ends and kickoff timer starts
    // websocket.subscribe("game", "replay_end", (data: string) => {
    //   // console.log("Replay End: ", data);
    // });

    // Match Ended
    websocket.subscribe("game", "match_ended", (data: MatchEnded) => {
      // console.log("Match Ended: ", data);
      if (!hasSetWinner) {
        setMatchSave(gameInfo);
        setHasSetWinner(true);
        if (data.winner_team_num === 0) {
          // Blue team won
          setGameInfo({
            ...gameInfo,
            series: {
              ...gameInfo.series,
              blue: gameInfo.series.blue + 1,
            },
          });

          setUmnWinner(configInfo.blue.isUMN);
        } else {
          // Orange team won
          setGameInfo({
            ...gameInfo,
            series: {
              ...gameInfo.series,
              orange: gameInfo.series.orange + 1,
            },
          });

          setUmnWinner(configInfo.orange.isUMN);
        }
      }
    });

    // Podium Start - Showing Podium
    websocket.subscribe("game", "podium_start", (data: string) => {
      // console.log("Podium Start: ", data);
      setShowPodium(true);
      setShowTransition(false);
    });

    // // Match Destroyed
    // websocket.subscribe("game", "match_destroyed", (data: string) => {
    //   // console.log("Match Destroyed: ", data);
    // });
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
          {showOverlay && (
            <OverlayWrapper>
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
              <GoalReplay
                show={isReplay}
                team={goal?.scorer.team_num ?? goal?.scorer.teamnum}
                scorer={goal?.scorer.name}
                isNull={goal === null}
              />
            </OverlayWrapper>
          )}
        </>
      )}
      {showPodium && (
        <>
          <HCWinner gameInfo={matchSave} isUmnWinner={isUmnWinner} />
        </>
      )}
      {showTransition && <HCTransition />}
    </>
  );
};
