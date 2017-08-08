$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-revealed").slideToggle();
    $(".walrus-hidden").slideToggle();
  });

  $("button").click(function() {
    var text = $(this).text() == 'Wanna See Turtle?' ? 'That turtle is TOO much!' : 'Wanna See Turtle?';
    $(this)
    .text(text)
    $(".turtle").fadeToggle();
  });
});
