const goldRush = require("./GoldRush");

board = new goldRush(5, 5);

board.print(); //the print method should be defined inside of Matrix
board.movePlayer(1, "down"); //this method should be defined inside of GoldRush
board.print();
board.movePlayer(2, "left");
board.print();
