const combineArrays = <First, Second, Result>(
  first: First[],
  second: Second[],
  fn: (a: First, b: Second) => Result
): Result[] => {
  return first.map((value, index) => fn(value, second[index]));
};

export default combineArrays;
