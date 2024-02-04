import { useContext } from "react";
import { HeaderImage, HeaderScore, HeaderWrapper } from "./PGHeader.style";
import { ConfigContext } from "../../../contexts/ConfigContext";
import { Series } from "../../Scorebug/Series/Series";

interface PGHeaderProps {
  blueScore: number;
  orangeScore: number;
}

export const PGHeader = ({ blueScore, orangeScore }: PGHeaderProps) => {
  const { configInfo } = useContext(ConfigContext);

  return (
    <>
      <HeaderWrapper>
        <HeaderImage src={configInfo.blue.avatar} />
        <HeaderScore>
          {blueScore} - {orangeScore}
        </HeaderScore>
        <HeaderImage src={configInfo.orange.avatar} />
      </HeaderWrapper>
      <Series isLeft topOffset={110} leftOffset={835} />
      <Series isLeft={false} topOffset={110} leftOffset={1065} />
    </>
  );
};
