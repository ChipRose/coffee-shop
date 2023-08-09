const sliderProps = {
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '#slider-button-next',
    prevEl: '#slider-button-prev',
  },
}

new Swiper('#swiper', sliderProps);
