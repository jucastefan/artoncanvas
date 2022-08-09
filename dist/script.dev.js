"use strict";

// Selecting Elements
var intro = document.getElementById("showcase");
var img_1 = document.querySelector("#img-1");
var img_2 = document.querySelector("#img-2");
var main_text = document.querySelector("#main-text"); // Functions

function removeIntro() {
  if (window.scrollY > 600) {
    intro.remove();
  }
} // Event Listeners


window.addEventListener("scroll", transitions);
window.addEventListener("scroll", removeIntro);
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});