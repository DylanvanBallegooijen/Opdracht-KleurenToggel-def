//Het toggle menu

let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "300px";


        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "0px";
        getSidebarUl.style.visibility = "hidden";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {

            getSidebarLinks[i].style.opacity = "0";


        }
        toggleNavStatus = false;
    }
}

//Veranderenvan achtergrond kleuren.

//wit achtergrond
const changeColorToWhite = function () {
    document.body.style.backgroundColor = "White";
};
const backGrWhite = document.getElementById("home-Btn");
backGrWhite.addEventListener('click', function () { changeColorToWhite(), toggleNav() });

//rood achtergrond
const changeColorToRed = function () {
    document.body.style.backgroundColor = "red";
};
const backGrRed = document.getElementById("red-Btn");
backGrRed.addEventListener('click', function () { changeColorToRed(), toggleNav() });

//oranje achtergrond
const changeColorToOrange = function () {
    document.body.style.backgroundColor = "orange";
};
const backGrOrange = document.getElementById("orange-Btn");
backGrOrange.addEventListener('click', function () { changeColorToOrange(), toggleNav() });

//paars achtergrond
const changeColorToPurple = function () {
    document.body.style.backgroundColor = "purple";
};
const backGrPurple = document.getElementById("purple-Btn");
backGrPurple.addEventListener('click', function () { changeColorToPurple(), toggleNav() });

//groen achtergrond
const changeColorToGreen = function () {
    document.body.style.backgroundColor = "green";
};
const backGrGreen = document.getElementById("green-Btn");
backGrGreen.addEventListener('click', function () { changeColorToGreen(), toggleNav() });


