$(document).ready(function(){

var scoreboard = 0;
var runningScore = parseInt($("#secondH3").text().replace("Scoreboard = "," "));
var userInput = $("input").val();

$("#first500").on("click", function(){
  $(this).text("").fadeIn(2000);
    var input = $("<input>")
    $(this).after(input);

  $("input").keypress(function(e) {
    if (event.which == 13) {
      event.preventDefault();
    var userInput = $("input").val();
    if (userInput === "") {
      alert("That is correct! You have won 500 points.");
    }
    else {
      alert("That is incorrect. You are a loo-hahoooo-zer!");
    }
    }
  })
})

$("#second500").on("click", function(){
  $(this).text("Name Michael's second boss when he worked as a telemarketer?").fadeIn(2000);
    var input = $("<input>")
    $(this).after(input);

  $("input").keypress(function(e) {
    if (event.which == 13) {
      event.preventDefault();
    var userInput = $("input").val();
    if (userInput === "nick figgaro") {
      alert("That is correct! You have won 500 points.");
    }
    else {
      alert("That is incorrect. You are a loo-hahoooo-zer!");
    }
    }
  })
})

});
