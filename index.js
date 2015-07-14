$(document).ready(function(){

var runningScore = 0;

//////////////////////////////////////////////////
//500 Questions
/////////////////////////////////////////////////

$("#first500").on("click", function(){
  $(this).text("What name did Michael sign on the diversity day pledge? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id","onefive")
    $(this).after(input);

  $("#onefive").keypress(function(e) {
    if (event.which == 13) {
      event.preventDefault();
    var userInput = $("#onefive").val();
    if (userInput === "daffy duck") {
      var score = 500;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is correct! You have won 500 points.");
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is incorrect. You are a loo-hahoooo-zer!");
    }
    }
  })
})

$("#second500").on("click", function(){
  $(this).text("Name Michael's second boss when he worked as a telemarketer? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "twofive")
    $(this).after(input);

  $("#twofive").keypress(function(e) {
    if (event.which == 13) {
      event.preventDefault();
    var userInput = $("#twofive").val();
    if (userInput === "nick figgaro") {
      var score = 500;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is correct! You have won 500 points.");
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is incorrect. You are a loo-hahoooo-zer!");
    }
    }
  })
})

$("#third500").on("click", function(){
  $(this).text("Who wrote something about Michael in the women's bathroom? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "threefive")
    $(this).after(input);

  $("#threefive").keypress(function(e) {
    if (event.which == 13) {
      event.preventDefault();
    var userInput = $("#threefive").val();
    if (userInput === "pam") {
      var score = 500;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is correct! You have won 500 points.");
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is incorrect. You are a loo-hahoooo-zer!");
    }
    }
  })
})

$("#fourth500").on("click", function(){
  $(this).text("").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fourfive")
    $(this).after(input);

  $("#fourfive").keypress(function(e) {
    if (event.which == 13) {
      event.preventDefault();
    var userInput = $("#fourfive").val();
    if (userInput === "") {
      var score = 500;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is correct! You have won 500 points.");
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is incorrect. You are a loo-hahoooo-zer!");
    }
    }
  })
})

$("#fifth500").on("click", function(){
  $(this).text("Name all three of Shrute Farms B&B rooms? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fivefive")
    $(this).after(input);

  $("#fivefive").keypress(function(e) {
    if (event.which == 13) {
      event.preventDefault();
    var userInput = $("#fivefive").val();
    if (userInput === "irrigation america nighttime") {
      var score = 500;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is correct! You have won 500 points.");
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is incorrect. You are a loo-hahoooo-zer!");
    }
    }
  })
})

//////////////////////////////////////////////////////
//400 Questions
/////////////////////////////////////////////////////

$("#first400").on("click", function(){
  $(this).text("What is Michael and Jan's safe word? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "onefour")
    $(this).after(input);

  $("#onefour").keypress(function(e) {
    if (event.which == 13) {
      event.preventDefault();
    var userInput = $("#onefour").val();
    if (userInput === "foliage") {
      var score = 400;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is correct! You have won 500 points.");
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is incorrect. You are a loo-hahoooo-zer!");
    }
    }
  })
})

$("#second400").on("click", function(){
  $(this).text("Name Jim and Pam's kids' names? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "twofour")
    $(this).after(input);

  $("#twofour").keypress(function(e) {
    if (event.which == 13) {
      event.preventDefault();
    var userInput = $("#twofour").val();
    if (userInput === "cecilia phillip") {
      var score = 400;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is correct! You have won 500 points.");
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is incorrect. You are a loo-hahoooo-zer!");
    }
    }
  })
})

$("#third400").on("click", function(){
  $(this).text("").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "threefour")
    $(this).after(input);

  $("#threefour").keypress(function(e) {
    if (event.which == 13) {
      event.preventDefault();
    var userInput = $("#threefour").val();
    if (userInput === "") {
      var score = 400;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is correct! You have won 500 points.");
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is incorrect. You are a loo-hahoooo-zer!");
    }
    }
  })
})

$("#fourth400").on("click", function(){
  $(this).text("What is the name of the exclusive club, Pam, Oscar and Toby establish in the break room? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fourfour")
    $(this).after(input);

  $("#fourfour").keypress(function(e) {
    if (event.which == 13) {
      event.preventDefault();
    var userInput = $("#fourfour").val();
    if (userInput === "finer things club") {
      var score = 400;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is correct! You have won 500 points.");
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is incorrect. You are a loo-hahoooo-zer!");
    }
    }
  })
})

$("#fifth400").on("click", function(){
  $(this).text("What radio station bumber sticker does Dwight have on his filing cabinet? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fivefour")
    $(this).after(input);

  $("#fivefour").keypress(function(e) {
    if (event.which == 13) {
      event.preventDefault();
    var userInput = $("#fivefour").val();
    if (userInput === "froggy 101") {
      var score = 400;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is correct! You have won 500 points.");
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
      alert("That is incorrect. You are a loo-hahoooo-zer!");
    }
    }
  })
})

///////////////////////////////////////////////////////
//300 Questions
//////////////////////////////////////////////////////

$("#first300").on("click", function(){
  $(this).text("Who is Michael's favorite actress? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "onethree")
    $(this).after(input);

$("#onethree").keypress(function(e) {
  if (event.which == 13) {
    event.preventDefault();
  var userInput = $("#onethree").val();
  if (userInput === "meryl streep") {
    var score = 300;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is correct! You have won 500 points.");
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is incorrect. You are a loo-hahoooo-zer!");
  }
  }
})
})

$("#second300").on("click", function(){
  $(this).text("What is Oscar's boyfriend's name? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "twothree")
    $(this).after(input);

$("#twothree").keypress(function(e) {
  if (event.which == 13) {
    event.preventDefault();
  var userInput = $("#twothree").val();
  if (userInput === "gil") {
    var score = 300;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is correct! You have won 500 points.");
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is incorrect. You are a loo-hahoooo-zer!");
  }
  }
})
})

$("#third300").on("click", function(){
  $(this).text("What is the name of the game where people walk with paper boxes on their feet during Office Olympics? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "threethree")
    $(this).after(input);

$("#threethree").keypress(function(e) {
  if (event.which == 13) {
    event.preventDefault();
  var userInput = $("#threethree").val();
  if (userInput === "flonkerton") {
    var score = 300;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is correct! You have won 500 points.");
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is incorrect. You are a loo-hahoooo-zer!");
  }
  }
})
})

$("#fourth300").on("click", function(){
  $(this).text("Where does Jim transfer after telling Pam how he feels about her?").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fourthree")
    $(this).after(input);

$("#fourthree").keypress(function(e) {
  if (event.which == 13) {
    event.preventDefault();
  var userInput = $("#fourthree").val();
  if (userInput === "stanford connecticut") {
    var score = 300;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is correct! You have won 500 points.");
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is incorrect. You are a loo-hahoooo-zer!");
  }
  }
})
})

$("#fifth300").on("click", function(){
  $(this).text("What online game, do the employees play at the Stanford branch? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fivethree")
    $(this).after(input);

$("#fivethree").keypress(function(e) {
  if (event.which == 13) {
    event.preventDefault();
  var userInput = $("#fivethree").val();
  if (userInput === "call of duty") {
    var score = 300;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is correct! You have won 500 points.");
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is incorrect. You are a loo-hahoooo-zer!");
  }
  }
})
})

//////////////////////////////////////////////////////
//200 Questions
//////////////////////////////////////////////////////

$("#first200").on("click", function(){
  $(this).text("Who gave Michael the World's Best Boss mug? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "onetwo")
    $(this).after(input);

$("#onetwo").keypress(function(e) {
  if (event.which == 13) {
    event.preventDefault();
  var userInput = $("#onetwo").val();
  if (userInput === "michael") {
    var score = 200;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is correct! You have won 500 points.");
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is incorrect. You are a loo-hahoooo-zer!");
  }
  }
})
})

$("#second200").on("click", function(){
  $(this).text("Name Angela's sick cat that Dwight later killed? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "twotwo")
    $(this).after(input);

$("#twotwo").keypress(function(e) {
  if (event.which == 13) {
    event.preventDefault();
  var userInput = $("#twotwo").val();
  if (userInput === "sprinkles") {
    var score = 200;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is correct! You have won 500 points.");
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is incorrect. You are a loo-hahoooo-zer!");
  }
  }
})
})

$("#third200").on("click", function(){
  $(this).text("When Jim is impersonating Dwight, what 3 B's does he say? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "threetwo")
    $(this).after(input);

$("#threetwo").keypress(function(e) {
  if (event.which == 13) {
    event.preventDefault();
  var userInput = $("#threetwo").val();
  if (userInput === "bears beets battlestar gallatica") {
    var score = 200;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is correct! You have won 500 points.");
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is incorrect. You are a loo-hahoooo-zer!");
  }
  }
})
})

$("#fourth200").on("click", function(){
  $(this).text("").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fourtwo")
    $(this).after(input);

$("#fourtwo").keypress(function(e) {
  if (event.which == 13) {
    event.preventDefault();
  var userInput = $("#fourtwo").val();
  if (userInput === "bears, beets, battlestar gallatica") {
    var score = 200;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is correct! You have won 500 points.");
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is incorrect. You are a loo-hahoooo-zer!");
  }
  }
})
})

$("#fifth200").on("click", function(){
  $(this).text("What was the award that Kelly recieved in the Dundies episode? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fivetwo")
    $(this).after(input);

$("#fivetwo").keypress(function(e) {
  if (event.which == 13) {
    event.preventDefault();
  var userInput = $("#fivetwo").val();
  if (userInput === "spicy curry award") {
    var score = 200;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is correct! You have won 500 points.");
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is incorrect. You are a loo-hahoooo-zer!");
  }
  }
})
})

///////////////////////////////////////////////////////
//100 Questions
///////////////////////////////////////////////////////

$("#first100").on("click", function(){
  $(this).text("What is Michael Scott's catchphrase? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "oneone")
    $(this).after(input);

$("#oneone").keypress(function(e) {
  if (event.which == 13) {
    event.preventDefault();
  var userInput = $("#oneone").val();
  if (userInput === "thats what she said") {
    var score = 100;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is correct! You have won 500 points.");
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is incorrect. You are a loo-hahoooo-zer!");
  }
  }
})
})

$("#second100").on("click", function(){
  $(this).text("Name Andy's acapella group? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "twoone")
    $(this).after(input);

$("#twoone").keypress(function(e) {
  if (event.which == 13) {
    event.preventDefault();
  var userInput = $("#twoone").val();
  if (userInput === "here comes treble") {
    var score = 100;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is correct! You have won 500 points.");
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is incorrect. You are a loo-hahoooo-zer!");
  }
  }
})
})

$("#third100").on("click", function(){
  $(this).text("What restaurant does Pam get banned from in the Dundies episode? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "threeone")
    $(this).after(input);

$("#threeone").keypress(function(e) {
  if (event.which == 13) {
    event.preventDefault();
  var userInput = $("#threeone").val();
  if (userInput === "chilies") {
    var score = 100;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is correct! You have won 500 points.");
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is incorrect. You are a loo-hahoooo-zer!");
  }
  }
})
})

$("#fourth100").on("click", function(){
  $(this).text("Who started their first day at Dunder Mifflin in the first episode? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fourone")
    $(this).after(input);

$("#fourone").keypress(function(e) {
  if (event.which == 13) {
    event.preventDefault();
  var userInput = $("#fourone").val();
  if (userInput === "ryan howard") {
    var score = 100;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is correct! You have won 500 points.");
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is incorrect. You are a loo-hahoooo-zer!");
  }
  }
})
})

$("#fifth100").on("click", function(){
  $(this).text("What is Creed's job? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fiveone")
    $(this).after(input);

$("#fiveone").keypress(function(e) {
  if (event.which == 13) {
    event.preventDefault();
  var userInput = $("#fiveone").val();
  console.log(userInput)
  if (userInput === "quality assurance") {
    var score = 100;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is correct! You have won 500 points.");
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
    alert("That is incorrect. You are a loo-hahoooo-zer!");
  }
  }
})
})

});
