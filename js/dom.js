// Using DOM-method
/*
var headingElement = document.getElementById("main-heading");
console.log(headingElement.innerHTML);
var newHeadingText = prompt("Please provide a new heading:");
headingElement.innerHTML = newHeadingText;
*/

// Using JQUERY-method
/*
var newHeadingText = prompt("Please provide a new heading:");
$("#main-heading").text(newHeadingText);
$("body").append("<p>This is a new paragraph</p>");

for (var i = 0; i < 3; i++){
  var hobby = prompt("Tell me one of your hobbies!");
  $("body").append("<p>" + hobby + "</p>");
}
*/

// Using JQUERY for animation
$("h1").text("This will fade out").fadeOut(3000);