class GoldRush extends Matrix {
  constructor(row, col) {
    super(row, col);
    this.player1 = new Player(0, 0);
    this.player2 = new Player(row - 1, col - 1);
  }
  movePlayer(playerNum, moveStr) {
    let currPlayer;
    playerNum == 1
      ? (currPlayer = this.player1.getMyCurrPos())
      : (currPlayer = this.player2.getMyCurrPos());

    switch (moveStr) {
      case "down":
        currPlayer.row = currPlayer.row + 1;
        break;
      case "up":
        currPlayer.row = currPlayer.row - 1;
        break;
      case "left":
        currPlayer.col = currPlayer.col - 1;
        break;
      case "right":
        currPlayer.col = currPlayer.col + 1;
        break;
      default:
        console.log("Sorry.");
    }
    playerNum === 1
      ? this.changPlayerPos(this.player1, currPlayer, playerNum)
      : this.changPlayerPos(this.player2, currPlayer, playerNum);
  }
  changPlayerPos(player, newPos, playerNum) {
    let currPos = player.getMyCurrPos();
    this.get(newPos.row, newPos.col) === "C" ? player.addCoins(1) : null;
    this.alter(currPos.row, currPos.col, ".");
    this.alter(newPos.row, newPos.col, playerNum + "");
    player.setNewPos(newPos);
  }
}
