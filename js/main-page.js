/*
    This is my scripts for my main page

    Author: Ming Li
    Date: 6/29/2022
    File: main-page.js
*/

// h1, p
const allHeadOne = document.querySelectorAll("h1");
const allPara = document.querySelectorAll("p");
// Body
const docBody = document.querySelector("body");
const lightDarkModeBtnBtn = document.querySelectorAll("#light-dark-btn span");
// My Icons
const icon = document.querySelector("#my-icon a")
const myIcon = document.querySelectorAll("#my-icon img")
const initialsLight = document.querySelector("#initials-light")
const cowLight = document.querySelector("#cow-light");
const cowDark = document.querySelector("#cow-dark");
// page btn
const resumeBtn = document.querySelector("#resume");

// Following toggles light to dark mode and vice versa
for (let i = 0; i < 2; i++) {
    lightDarkModeBtnBtn[i].addEventListener("click", function () {
        // h1, p
        for (let head = 0; head < allHeadOne.length; head++)
        {
            allHeadOne[head].classList.toggle("dark-mode-text");
        }
        for (let para = 0; para < allPara.length; para++)
        {
            allPara[para].classList.toggle("dark-mode-text");
        }

        // Body bg
        docBody.classList.toggle("dark-mode-bg");
        resumeBtn.classList.toggle("dark-mode")

        for (let x = 0; x < 2; x++) {
            // Light/Dark button btn
            lightDarkModeBtnBtn[x].classList.toggle("hidden");
            // My icon
            myIcon[x].classList.toggle("hidden");
            myIcon[x].classList.toggle("active");
        }
    })
}

// The following changes the icon of the nav when mouse in and out
// Mouse in to show cow depending on active class
icon.addEventListener("mouseover", function () {
    for (let i = 0; i < 2; i++) {
        // If the first icon contains active class and if ID int-light
        if (myIcon[0].classList.contains("active") && initialsLight) {
            myIcon[0].classList.add("hidden"); // Hides initials
            cowLight.classList.remove("hidden"); // Shows light mode cow
        }
        else {
            myIcon[1].classList.add("hidden"); // Hides other initials
            cowDark.classList.remove("hidden"); // Shows dark mode cow
        }
    }
})

// Hover out to return the icon to orignal before hover
icon.addEventListener("mouseout", function () {
    for (let i = 0; i < 2; i++) {
        if (myIcon[0].classList.contains("active") && initialsLight) {
            myIcon[0].classList.remove("hidden");  // Hides initials
            cowLight.classList.add("hidden");  // Shows light mode cow
        }
        else {
            myIcon[1].classList.remove("hidden"); // Hides other initials
            cowDark.classList.add("hidden"); // Shows dark mode cow
        }
    }
})