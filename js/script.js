//---------BURGER MENU----------//

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

//--------ACCORDION---------//

const accordion = document.getElementsByClassName("menu");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

//--------SWIPER-------//

const swiper = new Swiper(".swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  clickable: true,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//------------MENU------------//

const btn = document.querySelectorAll(".menu-submenu");
const view = document.querySelectorAll(".menu-view");

function hideView(array) {
  Array.from(array).forEach((el) => {
    el.classList.remove("show");
  });
}

function showView(id, e) {
  hideView(btn);
  hideView(view);
  document.getElementById(id).classList.add("show");
}

Array.from(btn).forEach((el) => {
  el.addEventListener("click", function (e) {
    const id = this.getAttribute("data-toggle");
    showView(id);
    this.classList.add("show");
  });
});

const menu = document.querySelector(".menu-selector");
const up = document.querySelector(".menu-select-up");
const down = document.querySelector(".menu-select-down");

function selectMenu() {
  menu.classList.toggle("active");
  up.classList.toggle("present");
  down.classList.toggle("present");
}

function closeMenu() {
  menu.classList.remove("active");
  up.classList.remove("present");
  down.classList.add("present");
}
