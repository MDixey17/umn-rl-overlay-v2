import { PLAYER_BOOST_CIRCLE } from "../constants/ComponentConstants";

const getBoostBarWidth = (boostAmount: number, maxWidth: number): number => {
  return (boostAmount / 100) * maxWidth;
};

const getBoostBarCircumference = (
  boostAmount: number,
  maxCircumference: number
): number => {
  return ((100 - boostAmount) / 100) * maxCircumference;
};

const getNormalizedRadius = (): number => {
  return (
    PLAYER_BOOST_CIRCLE.innerCircle.radius -
    PLAYER_BOOST_CIRCLE.boostRing.thickness * 2
  );
};

const getCircumference = (): number => {
  return getNormalizedRadius() * 2 * Math.PI;
};

export const BoostService = {
  getBoostBarCircumference,
  getBoostBarWidth,
  getNormalizedRadius,
  getCircumference,
};
