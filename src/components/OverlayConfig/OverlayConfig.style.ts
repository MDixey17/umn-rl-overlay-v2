import { styled } from "styled-components";
import { SCOREBUG_TEAM } from "../../constants/ComponentConstants";

export const ConfigContainer = styled.div`
  color: black;
  background-color: whitesmoke;
  font-family: bahnschrift;
  height: 1080px;
  width: 1920px;
`;

export const ConfigWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
`;

export const ConfigInputWrapper = styled.div`
  width: 30%;
  margin-left: 15%;
`;

export const ConfigHeading = styled.h1`
  text-align: center;
  margin-top: 0;
  padding-top: 8px;
`;

export const ConfigSubHeading = styled.h2`
  text-align: center;
  text-decoration: underline;
`;

export const ConfigSubHeading2 = styled.h3``;

export const ConfigInput = styled.input`
  margin-left: 4px;
  margin-bottom: 12px;
  border-radius: 6px;
`;

export const ConfigPreviewWrapper = styled.div`
  width: 30%;
  margin-right: 15%;
  text-align: center;
`;

export const ConfigPreviewImage = styled.img`
  height: ${SCOREBUG_TEAM.logoHeight}px;
  width: ${SCOREBUG_TEAM.logoWidth}px;
`;

export const ConfigPreviewScoreWrapper = styled.div<{
  primary: string;
  secondary: string;
}>`
  background-color: ${(props) => props.primary};
  color: ${(props) => props.secondary};
  height: ${SCOREBUG_TEAM.height}px;
  width: ${SCOREBUG_TEAM.topWidth / 2}px;
  margin-left: 12.5%;
`;

export const ConfigPreviewScoreText = styled.p`
  font-size: ${SCOREBUG_TEAM.fontSize}px;
  text-align: center;
  margin: 4px 12px;
`;

export const ConfigButton = styled.button``;

export const ConfigLabel = styled.label``;
