interface TeamInfo {
  primary: string;
  secondary: string;
  avatar: string;
  isUMN: boolean;
}

interface BroadcastTeam {
  caster1: string;
  caster2: string;
  broadcaster: string;
}

export interface ConfigInfo {
  blue: TeamInfo;
  orange: TeamInfo;
  seriesLength: number;
  hideConfig: boolean; // false = show config; true = hide config
  broadcastTeam: BroadcastTeam;
  leagueAvatar: string;
}
