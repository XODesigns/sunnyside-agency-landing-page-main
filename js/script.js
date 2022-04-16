const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

if ($('.hamburger').is(':active')) {
    $(this).addClass("fixed-position");
    $('.nav-menu').addClass("fixed-position");
 }