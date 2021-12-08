class Player {
  constructor(currRow, currCol) {
    this.currRow = currRow;
    this.currCol = currCol;
    this.prevRow = currRow;
    this.prevCol = currCol;
    this.numCoins = 0;
  }
  setNewPos(newPos) {
    this.savePrevPos();
    this.currRow = newPos.row;
    this.currCol = newPos.col;
  }
  savePrevPos() {
    this.prevRow = this.currRow;
    this.prevCol = this.currCol;
  }
  getMyCurrPos() {
    return { row: this.currRow, col: this.currCol };
  }
  addCoins(amount) {
    this.numCoins += amount;
  }
}

//module.exports = Player;
