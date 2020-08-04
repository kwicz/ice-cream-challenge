$(document).ready(function() {
  $("html").css({"display":"flex", "justify-content":"center"})
  $("body").css({"flex-direction":"column"}, )
  $("body").prepend("<div id='solutionButtons'></div><hr /><h1>Ice Cream Flavors:</h1>");
  
  const buttons = [".appendTo()", ".html()", ".map()", ".prepend()"]

  for(let i = 0; i < buttons.length; i++) {
    $("#solutionButtons").append("<button onClick='solution" + [i + 1] + "()'>" + buttons[i] + "</button>");
  }

  $("button").css({"margin":"10px", "height":"100px", "width":"100px", "border-radius":"50%", "background-color":"pink"}, )
});