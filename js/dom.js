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
/* $("h1").fadeOut(3000); */
/* $("h1").text("This will fade out").fadeOut(3000); */
/* $("h1").fadeOut(3000).fadeIn(3000); */
/* $("h1").slideUp(1000).slideDown(1000); */

// Try it
$("body").append("<p>How are you?</p>");
/* $("h1").slideUp(1000).slideDown(1000).fadeOut(2000).fadeIn(2000); */
/*
$("h1").fadeOut(2000);
$("h1").fadeIn(2000);
*/

/*
for (var i = 0; i < 5; i++){
$("h1").fadeOut(2000);
$("h1").fadeIn(2000);
}
*/