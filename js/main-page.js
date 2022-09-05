// h1, h2, p
const allHeadOne = document.querySelectorAll("h1");
const bioHeadTwo = document.querySelector("#bio h2");
const headerPara = document.querySelector("header p");
const allBioPara = document.querySelectorAll("#bio p");
// Body
const docBody = document.querySelector("body");
const lightDarkModeBtn = document.querySelector("#light-dark-btn");
const lightDarkModeBtnIcon = document.querySelectorAll("#light-dark-btn span");
// My Icons
const icon = document.querySelector("#my-icon a")
const myIcon = document.querySelectorAll("#my-icon img")
const initialsLight = document.querySelector("#initials-light")
const cowLight = document.querySelector("#cow-light");
const cowDark = document.querySelector("#cow-dark");
// page btn
const resumeBtn = document.querySelector("#resume");
// Main
const mainSection = document.querySelector("main");
const projectContainer = document.getElementById('myProjects')
const commentsContainer = document.getElementById('commentsContainer')
// Comment
const commentCards = document.querySelectorAll('.card');
const arrowLeftBtn = document.querySelector('.arrow-left');
const arrowRightBtn = document.querySelector('.arrow-right');
// Comment Button Position
const btnPositionContainer = document.querySelectorAll('.button-position div')
const btnPosition = document.querySelectorAll('.button-position button')
// Footer
const footerSection = document.querySelector("footer");
const fontAwesomeIcons = document.querySelectorAll("#font-awesome-icons-list a");

/* Loops
======================================================================================================================*/
// Following toggles light to dark mode and vice versa
for (let i = 0; i < 2; i++) {
    lightDarkModeBtnIcon[i].addEventListener("click", function () {
        // h1, h2, p
        for (let head = 0; head < allHeadOne.length; head++)
        {
            allHeadOne[head].classList.toggle("dark-mode-text")
        }
        for (let bio = 0; bio < allBioPara.length; bio++)
        {
            allBioPara[bio].classList.toggle("dark-mode-text")
        }
        bioHeadTwo.classList.toggle("dark-mode-text")
        headerPara.classList.toggle("dark-mode-text")
        // Body bg
        docBody.classList.toggle("dark-mode-bg")
        resumeBtn.classList.toggle("dark-mode")
        lightDarkModeBtn.classList.toggle("dark-mode")
        // main
        mainSection.classList.toggle("dark-mode")
        // footer
        footerSection.classList.toggle("dark-mode")
        for (let fontAwe = 0; fontAwe < fontAwesomeIcons.length; fontAwe++) {
            fontAwesomeIcons[fontAwe].classList.toggle("dark-mode")
        }

        for (let x = 0; x < 2; x++) {
            // Light/Dark button btn
            lightDarkModeBtnIcon[x].classList.toggle("hidden")
            // My icon
            myIcon[x].classList.toggle("hidden")
            myIcon[x].classList.toggle("active")
        }

        // Toggle Dark Mode for Position buttons
        for(let position = 0; position < btnPositionContainer.length; position++) {
            btnPositionContainer[position].classList.toggle('dark-mode')
            btnPosition[position].classList.toggle('dark-mode')
        }
    })
}

for (let i = 0; i < btnPosition.length; i++) {
    btnPosition[i].addEventListener('click', () => {
        positionChange(i)

        for (let card = 0; card < commentCards.length; card++) {
            commentCards[card].classList.remove('show')
        }

        commentCards[i].classList.add('show')
    })
}

// For each project in projectData, create an link on the grid
for (let i = 0; i < projectData.length; i++) {
    let link = 
    `
    <a href="${projectData[i].link}" target="_blank">
        <div>
            <img src="${projectData[i].img}" alt="" class="grid-button">
            <p class="grid-button-hover">${projectData[i].title}</p>
        </div>
    </a>
    `

    projectContainer.innerHTML += link;
}

/* Event Lis
======================================================================================================================*/
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

// Hover out to return the icon to original before hover
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

// Runs when the screen size is changed to 600px
window.addEventListener("resize", function () {
    if (window.innerWidth < 601) {
        fontIconResize()
    }
    else if (window.innerWidth > 600) {
        for (let i = 0; i < fontAwesomeIcons.length; i++) {
            fontAwesomeIcons[i].classList.remove("fa-4x")
        }
    }
})

// User Presses buttons to go through Comments
// Left Arrow
arrowLeftBtn.addEventListener('click', () => {
    for (let card = 0; card < commentCards.length; card++) {
        if (commentCards[card].classList.contains('show') && card === 0) {
            commentCards[card].classList.remove('show')
            commentCards[commentCards.length - 1].classList.add('show')
            positionChange(commentCards.length - 1);
            break
        }
        else if (commentCards[card].classList.contains('show')) {
            commentCards[card].classList.remove('show')
            commentCards[card - 1].classList.add('show')
            positionChange(card - 1);
            break
        }
    }
})

// Right Arrow
arrowRightBtn.addEventListener('click', () => {
    for (let card = 0; card < commentCards.length; card++) {
        if (commentCards[card].classList.contains('show') && card === commentCards.length - 1) {
            commentCards[card].classList.remove('show')
            commentCards[0].classList.add('show')
            positionChange(0);
            break
        }
        else if (commentCards[card].classList.contains('show')) {
            commentCards[card].classList.remove('show')
            commentCards[card + 1].classList.add('show')
            positionChange(card + 1);
            break
        }
    }
})

/* Functions
======================================================================================================================*/
// Resize the font awesome icons in the footer
function fontIconResize() {
    for (let i = 0; i < fontAwesomeIcons.length; i++) {
        fontAwesomeIcons[i].classList.add("fa-4x")
    }
}

function positionChange(num) {
    btnPosition.forEach(e => {
        e.classList.remove('show')
    });

    btnPosition[num].classList.add('show')
}