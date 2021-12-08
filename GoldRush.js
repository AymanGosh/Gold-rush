const matrix = require("./Matrix");
const player = require("./Player");

class GoldRush extends matrix {
  constructor(row, col) {
    super(row, col);
    this.player1 = new player(0, 0);
    this.player2 = new player(row - 1, col - 1);
  }
  movePlayer(playerNum, moveStr) {
    let currPlayer;
    playerNum == 1
      ? (currPlayer = this.player1.getMyCurrPos())
      : (currPlayer = this.player2.getMyCurrPos());
    console.log(currPlayer);
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
    this.alter(currPos.row, currPos.col, ".");
    this.alter(newPos.row, newPos.col, playerNum);
    player.setNewPos(newPos);
  }
  checkIfLegal(legalPlayer, direction) {
    if (legalPlayer.x == 0 && direction == "up") {
      return false;
    } else if (legalPlayer.x == this.col - 1 && direction == "down") {
      //change to ro maybe
      return false;
    } else if (legalPlayer.y == 0 && direction == "left") {
      return false;
    } else if (legalPlayer.y == this.row - 1 && direction == "right") {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = GoldRush;
