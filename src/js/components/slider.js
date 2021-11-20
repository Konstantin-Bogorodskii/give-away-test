const prodSwiper = new Swiper(".slider__container", {
  slidesPerView: 1,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-preview__next",
    prevEl: ".slider-preview__prev",
  },
});

const prodImages = document.querySelectorAll(".slider-preview__item");
prodImages.forEach((item) => {
  item.addEventListener("click", (e) => {
    const idx = +e.currentTarget.dataset.index;
    prodSwiper.slideTo(idx);
  });
});
