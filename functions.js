function getNumDimensions(arr) {
    if (Array.isArray(arr)) {
        // If it's an array, recursively check the first element
        return 1 + getNumDimensions(arr[0]);
    } else {
        // If it's not an array, it's a scalar (0 dimensions)
        return 0;
    }
}


function dotProduct(matrix1, matrix2) {


    //note to self: refactor this, to make each weights/inputs an instance of a class
    if (getNumDimensions(matrix1) == 1 && getNumDimensions(matrix2) == 1) {
        //so this is for if we are dealing with two vectors 

        let result = 0 //can't use const as we plan to change the value

        if (matrix1.length() !== matrix2.legnth()) {
            throw new Error("Vectors must be the same length to multiply")
        } else {
            for (let i = 0; i < matrix1.length; i++) {
                result += matrix1[i]*matrix2[i]
            }

            return result //this should mean that our other conditions are not checked - TEST THIS IN JEST
            //so that the next condition will NOT run for two vectors
        };

    }else if (getNumDimensions(matrix1) == 1 || getNumDimensions(matrix1) == 1 ) {

        //intialize our result
        result = 0 
        //enter logic here for checking a vector and a matrix 

        return result
    }else if (getNumdimensions(matrix1) == 2 && getNumdimensions == 2) {
        // First we check if we have two 2D matrices: First, check if the two matrices are compatible
   
        //so we fetch our row and column lengths
        const rows1 = matrix1.length;
        const cols1 = matrix1[0].length;
        const rows2 = matrix2.length;
        const cols2 = matrix2[0].length;
        
        if (cols1 !== rows2  || rows1 !== cols2 ) {
            //catch the error if they are not compatible:
            throw new Error("Matrices not compatible. Rows of the first matrix must equal columns of the second, or vice versa");
        } else {
            //initialize our result
            let result = new Array(rows1).fill(null).map(() => new Array(cols2).fill(0));
            
            for (let i = 0; i < rows1; i++) {
                for (let j = 0; j < cols2; j++) {
                    for (let k = 0; k < cols1; k++) {
                        result[i][j] += matrix1[i][k] * matrix2[k][j];
                    }
                }
            }
            return result
        }
    }
}
module.exports = dotProduct

