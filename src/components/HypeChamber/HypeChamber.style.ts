import styled from "styled-components";

export const onHCVideoEnd = (event: React.SyntheticEvent<HTMLVideoElement>) => {
  event.currentTarget.style.display = "none";
};

export const HCVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 1920px;
  height: 1080px;
  z-index: 9999;
`;

export const HCSource = styled.source``;
