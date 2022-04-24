// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import { computeMaximums, computeMaximumSum, Line, Pyramid } from ".";
expect.extend(matchers);

describe("computeMaximumSum()", function () {
  test("Pyramid of 1 line", function () {
    // GIVEN
    const pyramid: Pyramid = [[1]];

    // WHEN
    const actual = computeMaximumSum(pyramid);

    // THEN
    expect(actual).toEqual(1);
  });

  test("Pyramid of 2 lines", function () {
    // GIVEN
    const pyramid: Pyramid = [[1], [2, 3]];

    // WHEN
    const actual = computeMaximumSum(pyramid);

    // THEN
    expect(actual).toEqual(4);
  });

  test("Pyramid of 3 lines", function () {
    // GIVEN
    const pyramid: Pyramid = [[1], [2, 3], [4, 5, 6]];

    // WHEN
    const actual = computeMaximumSum(pyramid);

    // THEN
    expect(actual).toEqual(10);
  });

  test("[Control]", function () {
    // GIVEN
    const pyramid: Pyramid = [[3], [7, 4], [4, 2, 3], [6, 5, 9, 3]];

    // WHEN
    const actual = computeMaximumSum(pyramid);

    // THEN
    expect(actual).toEqual(21);
  });
});

describe("computeMaximums()", function () {
  test("2 values", function () {
    // GIVEN
    const line: Line = [0, 1];

    // WHEN
    const actual = computeMaximums(line);

    // THEN
    const expected: Line = [1];
    expect(actual).toEqual(expected);
  });

  test("3 values", function () {
    // GIVEN
    const line: Line = [0, 1, 2];

    // WHEN
    const actual = computeMaximums(line);

    // THEN
    const expected: Line = [1, 2];
    expect(actual).toEqual(expected);
  });
});
