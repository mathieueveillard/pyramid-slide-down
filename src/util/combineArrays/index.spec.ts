import combineArrays from ".";

describe("combineArrays()", function () {
  test("sum", function () {
    // GIVEN
    const first = [0, 1, 2, 3];
    const second = [10, 10, 10, 10];

    // WHEN
    const actual = combineArrays(first, second, (a, b) => a + b);

    // THEN
    const expected = [10, 11, 12, 13];
    expect(actual).toEqual(expected);
  });
});
