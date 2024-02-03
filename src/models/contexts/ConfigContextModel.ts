import { ConfigInfo } from "./ConfigInfo";

export interface ConfigContextModel {
  configInfo: ConfigInfo;
  setConfigInfo: (newConfigInfo: ConfigInfo) => void;
}
