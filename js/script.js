// Efecto scroll del menu
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    header.classList.toggle("solid", window.scrollY > 100);
});

// Menú responsive
const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("nav-items");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("active");
});


// Programación del acordeón
const acordion = document.getElementsByClassName("accordion-box");
const iconDown = document.getElementsByClassName("fa-caret-down");
const iconUp = document.getElementsByClassName("fa-caret-up");

for(let i = 0; i < acordion.length; i++) {
    acordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}

