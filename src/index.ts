import findBestSolution from "./utils/findBestSolution";
import sum from "./utils/sum";

export type Pyramid = number[][];

type Position = {
  line: number;
  column: number;
};

type Path = Position[];

export type EvaluatedPath = number[];

const left = ({ line, column }: Position): Position => ({
  line: line + 1,
  column,
});

const right = ({ line, column }: Position): Position => ({
  line: line + 1,
  column: column + 1,
});

const value =
  (pyramid: Pyramid) =>
  ({ line, column }: Position): number =>
    pyramid[line][column];

const evaluate =
  (pyramid: Pyramid) =>
  (path: Path): number =>
    path.map(value(pyramid)).reduce(sum, 0);

const isAtBottomOfPyramid =
  (pyramid: Pyramid) =>
  ({ line }: Position): boolean =>
    line === pyramid.length - 1;

const recursiveSlideDown =
  (pyramid: Pyramid) =>
  (origin: Position): Path => {
    if (isAtBottomOfPyramid(pyramid)(origin)) {
      return [origin];
    }

    const buildBestPathFromPosition = (nextPosition: Position): Path => {
      return [origin, ...recursiveSlideDown(pyramid)(nextPosition)];
    };

    const comparePaths = (first: Path, second: Path) => {
      return evaluate(pyramid)(second) - evaluate(pyramid)(first);
    };

    return findBestSolution<Position, Path>({
      map: buildBestPathFromPosition,
      compare: comparePaths,
    })([left(origin), right(origin)]);
  };

const slideDown = (pyramid: Pyramid): EvaluatedPath => {
  const topOfPyramid: Position = { line: 0, column: 0 };
  return recursiveSlideDown(pyramid)(topOfPyramid).map(value(pyramid));
};

export default slideDown;
