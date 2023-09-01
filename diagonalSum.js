/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    // let arr = []
    // let hash = new Map()
    // for (let i = 0; i < mat.length; i++) {
    //     arr.push(mat[i][i])
    //     hash.set(i.toString() + i.toString(), i)
    // }
    // let k = 0

    // for (let j = mat.length - 1; j >= 0; j--) {
    //     if (!hash.has(k.toString() + j.toString() + '')) {
    //         arr.push(mat[k][j])
    //     }
    //     k++
    // }
    // return arr.reduce((acc, curr) => acc + curr, 0)
    let n = mat.length - 1; // Get the length of the array and subtract 1 to account for zero-based indexing
    let sum = 0; // Initialize a variable to hold the sum of the diagonal elements

    for (let i = 0; i <= n; i++) { // Loop over each row in the matrix
        sum += mat[i][i]; // Add the value at index [i][i] to the sum (main diagonal)

        if (i !== (n - i)) { // Check if we are not on an element that lies on both diagonals
            sum += mat[i][n - i]; // Add the value at index [i][n-i] to the sum (anti-diagonal)
        }
    }

    return sum;
};
console.log(diagonalSum([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]))
// mat[0][0]
// mat[1][1]
// mat[2][2]

// math[0][2]
// math[1][1]
// math[2][0]
