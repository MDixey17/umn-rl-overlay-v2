import { HCSource, HCVideo, onHCVideoEnd } from "../HypeChamber.style";
import HC_TRANSITION from "../../../assets/videos/HCLogo.mp4";

export const HCTransition = () => {
  return (
    <HCVideo id="hc-logo" autoPlay onEnded={onHCVideoEnd}>
      <HCSource type="video/mp4" src={HC_TRANSITION} />
    </HCVideo>
  );
};
