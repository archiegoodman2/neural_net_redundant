const { getNumDimensions, dotProduct } = require('./functions');



test('getting number of dimensions works for 1D arrays', () => {
  const onedimensionalmatrix = [1, 2, 3]
    expect(getNumDimensions(onedimensionalmatrix)).toBe(1);
  });

test('getting number of dimensions works for 2D arrays', () => {
  const twodimensionalmatrix = [[1 , 2, 3],
                              [1, 2, 3],
                              [1, 2, 3]]
  expect(getNumDimensions(twodimensionalmatrix)).toBe(2);
});


test('getting dotproduct of two vectors', () => {
  const vector1 = [1, 2, 3] 
  const vector2 = [2, 3, 4]

  expect(dotProduct(vector1, vector2)).toBe(20);
});

//this one is going to cause problems - need to check the logic in the actual functions file, I don't think it's correct
test('getting dotproduct of a vector and a 2D matrix', () => {
  const vector = [1, 2, 3] 
  const matrix = [[2, 3, 4],
                  [1, 2, 3],
                  [2 , 3, 4]]

  expect(dotProduct(vector, matrix)).toBe([12, 16, 22]);
});






