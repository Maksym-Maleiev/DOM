// DOM-method
/*
var headingElement = document.getElementById("main-heading");
console.log(headingElement.innerHTML);
var newHeadingText = prompt("Please provide a new heading:");
headingElement.innerHTML = newHeadingText;
*/

// Using JQUERY-method
var newHeadingText = prompt("Please provide a new heading:");
$("#main-heading").text(newHeadingText);