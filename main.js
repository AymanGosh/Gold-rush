board = new GoldRush(5, 5);
render = new Render();

render.render(board);

$(document).keypress(function (e) {
  //w
  if (e.which == 119) {
    board.movePlayer(1, "up");
  }
  //s
  if (e.which == 115) {
    board.movePlayer(1, "down");
  }
  //a
  if (e.which == 97) {
    board.movePlayer(1, "left");
  }
  //d
  if (e.which == 100) {
    board.movePlayer(1, "right");
  }
  ////////////////////////////////////////////////////////
  //i
  if (e.which == 105) {
    board.movePlayer(2, "up");
  }
  //k
  if (e.which == 107) {
    board.movePlayer(2, "down");
  }
  //j
  if (e.which == 106) {
    board.movePlayer(2, "left");
  }
  //l
  if (e.which == 108) {
    board.movePlayer(2, "right");
  }

  render.render(board);
});
