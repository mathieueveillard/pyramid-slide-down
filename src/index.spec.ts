import slideDown, { EvaluatedPath, Pyramid } from ".";

describe("Test of slideDown()", () => {
  test("", () => {
    // GIVEN
    const pyramid: Pyramid = [
      [3], //
      [7, 4],
      [4, 2, 3],
      [6, 5, 9, 3],
    ];

    // WHEN
    const actual = slideDown(pyramid);

    // THEN
    const expected: EvaluatedPath = [3, 7, 2, 9];
    expect(actual).toEqual(expected);
  });
});
