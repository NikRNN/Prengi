const swiper = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  effect: "fade",
  loop: true,
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
});

const swiper1 = new Swiper(".swiper2", {
  // Optional parameters
  direction: "horizontal",
  effect: "fade",
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-custom-next",
    prevEl: ".swiper-custom-prev",
  },
});
