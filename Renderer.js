const source = $("#matrix-template").html();
const template = Handlebars.compile(source);

class Render {
  constructor() {}
  render(board) {
    $(".matrix-wrapper").empty();
    let newHTML;
    for (let i = 0; i < 5; i++) {
      newHTML = template({ matrix: board.getMyMatrix()[i] });
      $(".matrix-wrapper").append(newHTML);
    }
  }
}
