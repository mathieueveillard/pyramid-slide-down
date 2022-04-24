import combineArrays from "./util/combineArrays";
import sum from "./util/sum";

export type Line = number[];

export type Pyramid = Line[];

export const computeMaximumSum = (pyramid: Pyramid): number => {
  if (pyramid.length === 1) {
    return pyramid[0][0];
  }

  const topOfPyramid = [...pyramid].slice(0, pyramid.length - 2);
  const penultimateLine = pyramid[pyramid.length - 2];
  const ultimateLine = pyramid[pyramid.length - 1];
  const maximums = computeMaximums(ultimateLine);
  return computeMaximumSum([
    ...topOfPyramid, //
    combineArrays(penultimateLine, maximums, sum),
  ]);
};

export const computeMaximums = (line: Line): Line => {
  const allButLast = line.slice(0, -1);
  const allButFirst = line.slice(1);
  return combineArrays(allButLast, allButFirst, Math.max);
};
