const slider = document.querySelector('#price-range-slider');

noUiSlider.create(slider, {
  start: [0, 85],
  connect: true,
  range: {
    'min': 0,
    'max': 100
  }
});
