var rotate = function(matrix) {
    console.log('len' ,matrix.length)
    for(let i = 0; i<matrix.length; i++){
        for(let j = i; j<matrix.length; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    for(let row of matrix){
        row.reverse()
    }
    return matrix
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))