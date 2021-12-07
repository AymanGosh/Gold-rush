const goldRush = require("./GoldRush");

board = new goldRush(5, 5);

board.movePlayer(2, "up");
board.print();
board.movePlayer(2, "down");
board.print();
board.movePlayer(2, "left");
board.print();
board.movePlayer(2, "right");
board.print();
