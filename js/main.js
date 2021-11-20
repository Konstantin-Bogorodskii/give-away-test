"use strict";
"use strict";

var prodSwiper = new Swiper(".slider__container", {
  slidesPerView: 1,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: ".slider-preview__next",
    prevEl: ".slider-preview__prev"
  }
});
var prodImages = document.querySelectorAll(".slider-preview__item");
prodImages.forEach(function (item) {
  item.addEventListener("click", function (e) {
    var idx = +e.currentTarget.dataset.index;
    prodSwiper.slideTo(idx);
  });
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
