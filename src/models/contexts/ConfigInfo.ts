interface TeamInfo {
  primary: string;
  secondary: string;
  avatar: string;
  isUMN: boolean;
}

export interface ConfigInfo {
  blue: TeamInfo;
  orange: TeamInfo;
  seriesLength: number;
  hideConfig: boolean; // false = show config; true = hide config
}
