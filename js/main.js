var swiper = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 20,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    340: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});

const size_btn = document.querySelectorAll(".size-btn");
size_btn.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".size-btn.active").classList.remove("active");
    item.classList.add("active");
  });
});

const trend_item = document.querySelectorAll(".trend-item");
const open_modal = document.querySelector(".modal");
const Body = document.querySelector(".body");
const modal_close = document.querySelector(".modal-close");

modal_close.addEventListener("click", function () {
  open_modal.classList.remove("active");
  Body.classList.remove("active");
});

for (let i = 0; i < trend_item.length; i++) {
  trend_item[i].addEventListener("click", () => {
    open_modal.classList.add("active");
    Body.classList.add("active");
  });
}
