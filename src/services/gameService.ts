import { USPlayer } from "../models/UpdateState/USPlayer";

const getOrangeTeam = (players: USPlayer[]): USPlayer[] => {
  return players.filter((player) => player.team === 1);
};

const getBlueTeam = (players: USPlayer[]): USPlayer[] => {
  return players.filter((player) => player.team === 0);
};

const getPlayerFromTarget = (
  players: USPlayer[],
  target: string
): USPlayer | undefined => {
  return players.find((player) => target.includes(player.name));
};

const getClockFromSeconds = (seconds: number, isOt: boolean): string => {
  const numMinutes = Math.floor(seconds / 60);
  const numSeconds = seconds - numMinutes * 60;
  const numSecondsString: string =
    numSeconds > 9 ? numSeconds.toString() : `0${numSeconds}`;
  return isOt
    ? `+${numMinutes}:${numSecondsString}`
    : `${numMinutes}:${numSecondsString}`;
};

export const GameService = {
  getOrangeTeam,
  getBlueTeam,
  getPlayerFromTarget,
  getClockFromSeconds,
};
