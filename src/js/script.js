//слайдер в секции promo
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

// переключение слайдов в слайдере expert
const swiper1 = new Swiper(".extra", {
  direction: "horizontal",
  effect: "fade",
  loop: true,
  slidesPerView: 1,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: ".swiper-custom-next",
    prevEl: ".swiper-custom-prev",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  showTab("tab-1");

  document.querySelectorAll(".tab-link").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      let tabId = this.getAttribute("href").substr(1);
      showTab(tabId);
    });
  });
});

function showTab(tabId) {
  document.querySelectorAll(".expert-tab").forEach(function (tab) {
    if (tab.id === tabId) {
      tab.style.display = "block";
    } else {
      tab.style.display = "none";
    }
  });

  document.querySelectorAll(".tab-link").forEach(function (link) {
    link.classList.remove("is-active");
  });

  document
    .querySelector(`.tab-link[href="#${tabId}"]`)
    .classList.add("is-active");
}
