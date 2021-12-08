class Matrix {
  constructor(row, col) {
    this.matrix = this.generateMatrix(row, col);
  }
  getMyMatrix() {
    return this.matrix;
  }
  generateMatrix(numRows, numColumns) {
    let matrix = [];
    let num = 1;
    let coinsCounter = 0;
    let minCoins = 3;
    while (coinsCounter < minCoins) {
      coinsCounter = 0;
      for (let r = 0; r < numRows; r++) {
        matrix.push([]);
        for (let c = 0; c < numColumns; c++) {
          let randomIndexOfCoins = Math.floor(Math.random() * numColumns) + 0;
          if (c === randomIndexOfCoins) {
            matrix[r].push("C");
            coinsCounter++;
          } else matrix[r].push(".");
        }
      }
    }
    matrix[0][0] = "1";
    matrix[numRows - 1][numColumns - 1] = "2";
    return matrix;
  }
  print() {
    console.log(this.matrix);
  }
  get(x, y) {
    return this.matrix[x][y];
  }
  alter(row, col, newNumber) {
    this.matrix[row][col] = newNumber;
  }
  printColumn(x) {
    this.matrix.forEach((row) => console.log(row[x]));
  }
  printRow(y) {
    for (let i = 0; i < this.matrix[y].length; i++) {
      console.log(this.matrix[y][i]);
    }
  }
}
