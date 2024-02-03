import { createContext } from "react";
import {
  DEFAULT_BLUE_COLORS,
  DEFAULT_ORANGE_COLORS,
} from "../constants/ComponentConstants";
import { ConfigInfo } from "../models/contexts/ConfigInfo";
import { ConfigContextModel } from "../models/contexts/ConfigContextModel";

export const DEFAULT_CONFIG_INFO: ConfigInfo = {
  blue: {
    primary: DEFAULT_BLUE_COLORS.primary,
    secondary: DEFAULT_BLUE_COLORS.secondary,
    avatar: "",
    isUMN: false,
  },
  orange: {
    primary: DEFAULT_ORANGE_COLORS.primary,
    secondary: DEFAULT_ORANGE_COLORS.secondary,
    avatar: "",
    isUMN: false,
  },
  seriesLength: 1,
  hideConfig: false,
};

export const ConfigContext = createContext<ConfigContextModel>({
  configInfo: DEFAULT_CONFIG_INFO,
  setConfigInfo: (newConfigInfo: ConfigInfo) => {},
});
