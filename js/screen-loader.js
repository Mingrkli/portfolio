/*
    This works with screen-loader.css

    Author: Ming Li
    Date: 6/30/2022
    File: screen-loader.js
*/

// loading-wrapper class
const screenLoader = document.querySelector(".loading-wrapper");

// When screem finished loading
window.onload = function (){
    screenLoader.classList.add("loaded");

    if (window.innerWidth < 415) {
        fontIconResize()
    }
}

// Runs after the transition finished playing
screenLoader.addEventListener("transitionend", function () {
    screenLoader.classList.add("loaded-fin");
})