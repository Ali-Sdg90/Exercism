function pascalsTriangle(row) {
    let triangle = [];
    for (let i = 0; i < row; i++) {
        triangle[i] = [];
        for (let j = 0; j <= i; j++) {
            triangle[i][j] = 0;
        }
    }
    if (row > 0) {
        triangle[0] = [1];
    }
    for (let i = 1; i < row; i++) {
        for (let j = 0; j <= i; j++) {
            if (triangle[i - 1][j - 1]) {
                triangle[i][j] += triangle[i - 1][j - 1];
            }
            if (triangle[i - 1][j]) {
                triangle[i][j] += triangle[i - 1][j];
            }
        }
    }
    return triangle;
}