


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

        if (matrix1.length !== matrix2.length) {
            throw new Error("Vectors must be the same length to multiply")
        } else {
            for (let i = 0; i < matrix1.length; i++) {
                result += matrix1[i]*matrix2[i]
            }

            return result //this should mean that our other conditions are not checked - TEST THIS IN JEST
            //so that the next condition will NOT run for two vectors
        };

            //now this is for when one is a matrix and one is a vector
    }else if (getNumDimensions(matrix1) == 1 || getNumDimensions(matrix1) == 1 ) {

        //first we need to determine which of our two functions is the vector and which is the matrix
        if ((getNumDimensions(matrix1)) == 1) {
            const vector = matrix1;
            const matrix = matrix2;
        } else if ((getNumDimensions(matrix2)) == 1) {
            const vector = matrix2;
            const matrix = matrix2;
        } 

        //ok now out of matrix1 and 2, the one that is a vector is stored in 'vector'

        if (matrix[0].length !== vector.length) {
            throw new Error('Incompatible matrix and vector sizes for multiplication');
        }

        var result = [];

        for (var i = 0; i < matrix.length; i++) {
        
            var row = matrix[i];
            var sum = 0;

            for (var j = 0; j < row.length; j++) {
                sum += row[j] * vector[j];
            }

            result.push(sum);
        }
        return result;

        //and this finally is for two 2d matrices
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





//ok potential new idea - to avoid the recursion and other nasties

/*
function matrixvectorproduct(vector, matrix) {

    //first we check if the matrix and vector are compatible
    if (matrix[0].length !== vector.length) {
        throw new Error('Incompatible matrix and vector sizes for multiplication');
    }

    var result = [];

    for (var i = 0; i < matrix.length; i++) {
        
        var row = matrix[i];
        var sum = 0;

        for (var j = 0; j < row.length; j++) {
            sum += row[j] * vector[j];
        }

        result.push(sum);
    }

    return result;
}


function dotProduct(vector1, vector2) {
    // first we check if vectors are compatible
    
    if (vector1.length !== vector2.length) {
        throw new Error('Incompatible vector lengths for dot product');
    }

    var result = 0;

    for (var i = 0; i < vector1.length; i++) {
        result += vector1[i] * vector2[i];
    }

    return result;
}
*/

//this will only work if we are doing a separate operation for our input layer and hidden layers, not just looping all the way through.


module.exports = {
    getNumDimensions,
    dotProduct
};
