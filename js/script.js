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

function myFunction1() {
  const a = document.getElementById("appetisers-menu");
  const b = document.getElementById("salads-menu");
  const c = document.getElementById("starters-menu");
  const d = document.getElementById("main-dishes-menu");
  if (a.style.display == "none") {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
  } else {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
  }
}

function myFunction2() {
  const a = document.getElementById("appetisers-menu");
  const b = document.getElementById("salads-menu");
  const c = document.getElementById("starters-menu");
  const d = document.getElementById("main-dishes-menu");
  if (b.style.display == "none") {
    b.style.display = "block";
    a.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
  } else {
    b.style.display = "block";
    a.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
  }
}
function myFunction3() {
  const a = document.getElementById("appetisers-menu");
  const b = document.getElementById("salads-menu");
  const c = document.getElementById("starters-menu");
  const d = document.getElementById("main-dishes-menu");
  if (c.style.display == "none") {
    c.style.display = "block";
    b.style.display = "none";
    a.style.display = "none";
    d.style.display = "none";
  } else {
    c.style.display = "block";
    b.style.display = "none";
    a.style.display = "none";
    d.style.display = "none";
  }
}
function myFunction4() {
  const a = document.getElementById("appetisers-menu");
  const b = document.getElementById("salads-menu");
  const c = document.getElementById("starters-menu");
  const d = document.getElementById("main-dishes-menu");
  if (d.style.display == "none") {
    d.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    a.style.display = "none";
  } else {
    d.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    a.style.display = "none";
  }
}
