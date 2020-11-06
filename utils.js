// Exercise 1 code -------------------------------------------
function matrixProduct(mat1, mat2){
    let newMatrix = createMatrix(2,2); // Create 2x2 Matrix as we are doing multiplication of 2x2 matrices
    for (let row = 0; row < mat1.length; row++){
        for (let column = 0; column < mat1[row].length; column++){
            newMatrix[row][column] = mat1[row][0]*mat2[0][column] + mat1[row][1]*mat2[1][column];
        }
    }
    return newMatrix;
}
// [[c1,c2],[c3,c4]] - new matrix's values are equal to
// c1 = mat1[0][0]*mat2[0][0] + mat1[0][1]*mat2[1][0]
// c2 = mat1[0][0]*mat2[0][1] + mat1[0][1]*mat2[1][1]
// c3 = mat1[1][0]*mat2[0][0] + mat1[0][1]*mat2[1][0]
// c4 = mat1[1][0]*mat2[0][1] + mat1[0][1]*mat2[1][1]

// Exercise 2 code -------------------------------------------

function sumOfMatrices(mat1,mat2){
    let newMatrix = createMatrix(2,2); // Create 2x2 Matrix as we are doing summation of 2x2 matrices
    for (let row = 0; row < mat1.length; row++){
        for (let column = 0; column < mat1[row].length; column++){
            newMatrix[row][column] = mat1[row][column] + mat2[row][column];
        }
    }
    return newMatrix;
}

// [[c1,c2],[c3,c4]] - new matrix's values are equal to
// c1 = mat1[0][0] + mat2[0][0]
// c2 = mat1[0][1] + mat2[0][1] 
// c3 = mat1[1][0] + mat2[1][0] 
// c4 = mat1[1][1] + mat2[1][1]

// Matrix Creator ----------------------------------------------

function createMatrix(givenRow = 0, givenColumn = 0){
    let result = [];
    for (let row = 0; row < givenRow; row++){
        result.push([])
        for (let column = 0; column < givenColumn; column++){
            result[row].push(0);
        }
    }
    return result; // [[0,0],[0,0]]
}


// Exercise 3 Code -------------------------------------------------

function sumOfEachRow(matrix){
    let sumOfRows = [];
    for (let row = 0; row < matrix.length; row++){
        sumOfRows.push(sumOfArray(matrix[row]));
    }
    return sumOfRows;
}

function sumOfArray(array){
    let value = 0;
    for (let column = 0; column < array.length; column++){
        value = value + array[column];
    }
    return value;
}



module.exports = {
    sumOfArray,
    sumOfEachRow,
    createMatrix,
    sumOfMatrices,
    matrixProduct,
}
// End