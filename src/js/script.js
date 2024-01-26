const swiper = new Swiper(".swiper", {
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
