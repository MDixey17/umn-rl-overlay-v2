import { Clock } from "./Clock/Clock";
import { Series } from "./Series/Series";
import { Team } from "./Team/Team";

export const Scorebug = () => {
  return (
    <>
      <Clock />
      <Team isLeft />
      <Team isLeft={false} />
      <Series isLeft />
      <Series isLeft={false} />
    </>
  );
};
