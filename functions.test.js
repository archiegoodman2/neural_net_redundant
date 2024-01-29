const { getNumDimensions, dotProduct } = require('./functions');

// Test for getting number of dimensions for 1D arrays
test('getting number of dimensions works for 1D arrays', () => {
  const onedimensionalmatrix = [1, 2, 3];
  expect(getNumDimensions(onedimensionalmatrix)).toBe(1);
});

// Test for getting number of dimensions for 2D arrays
test('getting number of dimensions works for 2D arrays', () => {
  const twodimensionalmatrix = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
  ];
  expect(getNumDimensions(twodimensionalmatrix)).toBe(2);
});

// Test for getting dot product of two vectors
test('getting dot product of two vectors', () => {
  const vector1 = [1, 2, 3];
  const vector2 = [2, 3, 4];
  expect(() => dotProduct(vector1, vector2)).toBe(20);
});

// Test for correct error message when 2 vectors are the wrong size
test('correct error message when 2 vectors are wrong size', () => {
  const vector1 = [1, 2, 3];
  const vector2 = [2, 3, 4, 5];
  expect(() => dotProduct(vector1, vector2)).toThrow("Vectors must be the same length to multiply");
});

// Test for getting product of a vector and a 2D matrix
test('getting product of a vector and a 2D matrix', () => {
  const vector = [1, 2, 3];
  const matrix = [
    [2, 3, 4],
    [1, 2, 3],
    [2, 3, 4]
  ];
  expect(() => dotProduct(vector, matrix)).toEqual([12, 16, 22]);
});

// Test for correct error message when multiplying incompatible vector and matrix
test('correct error message when multiplying incompatible vector and matrix', () => {
  const vector = [1, 2, 3];
  const matrix = [
    [2, 3, 4],
    [1, 2, 3],
    [2, 3, 4],
    [1, 2, 3]
  ];
  expect(() => dotProduct(vector, matrix)).toThrow("Incompatible matrix and vector sizes for multiplication");
});
