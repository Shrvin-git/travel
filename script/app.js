
const swiper = new Swiper(".mySwiper", {


  loop: true,
  slidesPerView: "auto",
  spaceBetween: 50,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },



  breakpoints: {

    400: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
  },
});







const navToggleIcon = document.querySelector('.nav__btn-toggle')
const menu = document.querySelector('.nav-menu')

navToggleIcon.addEventListener('click', function () {
  this.classList.toggle('nav__toggle-icon--open');
  menu.classList.toggle('menu--open');

})