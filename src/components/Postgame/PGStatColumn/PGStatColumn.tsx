import { StatColumnText, StatColumnWrapper } from "./PGStatColumn.style";

export const PGStatColumn = () => {
  return (
    <StatColumnWrapper>
      <StatColumnText>SCORE</StatColumnText>
      <StatColumnText>GOALS</StatColumnText>
      <StatColumnText>ASSISTS</StatColumnText>
      <StatColumnText>SHOTS</StatColumnText>
      <StatColumnText>SAVES</StatColumnText>
      <StatColumnText>DEMOS</StatColumnText>
    </StatColumnWrapper>
  );
};
