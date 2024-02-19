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
const swiper1 = new Swiper(".swiper2", {
  direction: "horizontal",
  effect: "fade",
  loop: true,
  slidesPerView: 1,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: ".swiper2-custom-next",
    prevEl: ".swiper2-custom-prev",
  },
});

const swiper2 = new Swiper(".swiper3", {
  direction: "horizontal",
  effect: "fade",
  loop: true,
  slidesPerView: 1,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: ".swiper3-custom-next",
    prevEl: ".swiper3-custom-prev",
  },
});

const swiper3 = new Swiper(".swiper4", {
  direction: "horizontal",
  effect: "fade",
  loop: true,
  slidesPerView: 1,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: ".swiper4-custom-next",
    prevEl: ".swiper4-custom-prev",
  },
});

const swiper4 = new Swiper(".swiper5", {
  direction: "horizontal",
  effect: "fade",
  loop: true,
  slidesPerView: 1,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: ".swiper5-custom-next",
    prevEl: ".swiper5-custom-prev",
  },
});

const swiper5 = new Swiper(".swiper6", {
  direction: "horizontal",
  effect: "fade",
  loop: true,
  slidesPerView: 1,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: ".swiper6-custom-next",
    prevEl: ".swiper6-custom-prev",
  },
});

const swiper6 = new Swiper(".swiper7", {
  direction: "horizontal",
  effect: "fade",
  loop: true,
  slidesPerView: 1,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: ".swiper7-custom-next",
    prevEl: ".swiper7-custom-prev",
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

//работа с кнопками (вызов формы)
document.addEventListener("DOMContentLoaded", function () {
  const openForm = document.querySelectorAll(".openForm");
  const closeForm = document.querySelector(".main-form-close");
  const layer = document.querySelector(".layer");
  const form = document.querySelector("#form");
  const closeThanks = document.querySelector(".modal__close");
  // const thanks = document.getElementById("#thanks");

  openForm.forEach(function (open) {
    open.addEventListener("click", function () {
      layer.style.display = "block";
      form.style.display = "block";
    });
  });

  closeForm.addEventListener("click", function () {
    form.style.display = "none";
    layer.style.display = "none";
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      return;
    }

    const formData = new FormData(form);

    fetch("mailer/smart.php", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })

      .then(function () {
        const thanks = document.getElementById("thanks");
        thanks.style.display = "flex";
        form.style.display = "none";
        form.reset();
      });
  });

  closeThanks.addEventListener("click", function () {
    thanks.style.display = "none";
    layer.style.display = "none";
  });
});
