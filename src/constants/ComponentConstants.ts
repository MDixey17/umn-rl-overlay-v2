export const DEFAULT_BLUE_COLORS = {
  primary: "#3B63E0",
  secondary: "#FFFFFF",
};

export const DEFAULT_ORANGE_COLORS = {
  primary: "#D8723E",
  secondary: "#000000",
};

export const PLAYER_BOOST_BAR = {
  height: 40,
  width: 400,
  boostBarHeight: 10,
  fontSize: 30,
  bottomPadding: 16,
};

export const TEAM_PLAYER_GROUP = {
  topOffset: 20,
  sideOffset: 20,
  width: PLAYER_BOOST_BAR.width,
};

export const PLAYER_BOOST_CIRCLE = {
  bottom: 50,
  right: 25,
  backgroundColor: "#0000",
  innerCircle: {
    radius: 150,
    logoHeight: 125,
    logoWidth: 125,
    fontSize: 70,
  },
  boostRing: {
    thickness: 10,
  },
};

export const PLAYER_STATS_CARD = {
  height: 155,
  width: 460,
  playerName: {
    fontSize: 30,
  },
  secondaryBar: {
    fontSize: 16,
    height: 25,
  },
  stats: {
    nameSize: 22,
    valueSize: 44,
    marginLeft: 40,
  },
};

export const SCOREBUG_SERIES = {
  leftStart: 865,
  rightStart: 1030,
  horizontalOffset: 24,
  top: 50,
  height: 15,
  width: 15,
  zIndex: 7,
};

export const SCOREBUG_CLOCK = {
  bottomWidth: 70,
  backgroundColor: "#333333",
  topWidth: 358,
  fontSize: 54,
  height: 0,
  leftPercentage: 36.9,
  topOffset: TEAM_PLAYER_GROUP.topOffset,
  zIndex: 3,
  text: {
    leftPercentage: 47.25,
    top: -28,
    zIndex: 4,
  },
  overtime: {
    fontSize: 50,
    topOffset: -4,
  },
};

export const SCOREBUG_TEAM = {
  borderTop: SCOREBUG_CLOCK.bottomWidth,
  height: 70,
  topWidth: 840,
  top: TEAM_PLAYER_GROUP.topOffset,
  fontSize: 68,
  textTop: -48,
  logoHeight: 50,
  logoWidth: 90,
  logoTop: 30,
  leftTeam: {
    leftPercentage: 25,
    secondary: {
      leftPercentage: 24.25,
    },
    text: {
      leftPercentage: 29,
    },
    logo: {
      leftPercentage: 32,
    },
  },
  rightTeam: {
    leftPercentage: 49.15,
    secondary: {
      leftPercentage: 49.9,
    },
    text: {
      leftPercentage: 69.2,
    },
    logo: {
      leftPercentage: 63.2,
    },
  },
};

export const GOAL_REPLAY = {};

export const POSTGAME = {
  height: 1080,
  width: 1920,
  playerText: {
    margin: 0,
    fontWeight: 700,
    fontSize: 36,
  },
  statText: {
    margin: 0,
    fontWeight: 300,
    fontSize: 36,
  },
  statColumn: {
    left: 0,
    top: 0,
    height: 700,
    width: 700,
  },
  columnWrapper: {
    top: 250,
    blue: {
      left: 204,
    },
    orange: {
      left: 994,
    },
  },
  header: {
    top: TEAM_PLAYER_GROUP.topOffset,
    leftPercentage: 23.9,
    width: 1000,
    height: 200,
    fontSize: 64,
    logoHeight: 100,
    logoWidth: 180,
  },
  statNameColumn: {
    left: 940,
    top: 350,
    height: 600,
    width: 40,
    borderBottomSize: 6,
    fontSize: 32,
    fontWeight: 600,
    textMargin: 0,
  },
};
