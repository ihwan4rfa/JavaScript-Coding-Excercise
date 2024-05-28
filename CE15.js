const averageMatrix = (matrix) => {
    const matrixFlat = matrix.flat();
    let count = 0;

    for (let i = 0; i < matrixFlat.length; i++) {
        count += matrixFlat[i];
    }

    return count / matrixFlat.length;;
}

matrix1 = [
    [5, 8, 10],
    [3, 6, 9],
    [2, 4, 7]
]
matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(averageMatrix(matrix1));
console.log(averageMatrix(matrix2));