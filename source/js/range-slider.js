const LimitValue = {
  PRICE: {
    MIN: 0,
    MAX: 1000,
    STEP: 50,
  },
};

const FieldProperties = {
  PRICE: {
    MAIN_FIELD: '#price-range-slider',
    MIN_FIELD: '#min-price',
    MAX_FIELD: '#max-price',
    ACCURACY: 0,
  }
};

const slider = document.querySelector(FieldProperties.PRICE.MAIN_FIELD);
const minField = document.querySelector(FieldProperties.PRICE.MIN_FIELD);
const maxField = document.querySelector(FieldProperties.PRICE.MAX_FIELD);

const setSlider = (sliderElement, min, max, step) => {
  sliderElement.innerHTML = '';
  const sliderOptions = {
    start: [min, max*0.8],
    connect: true,
    step,
    range: {
      'min': min,
      'max': max,
    },
  };

  return noUiSlider.create(sliderElement, sliderOptions);
};

const setSliderDependencies = (sliderElement, limit, accuracy) => {
  const { MIN, MAX } = limit;

  sliderElement.noUiSlider.set([MIN, MAX]);

  sliderElement.noUiSlider.on('update', (values, handle) => {
    if (handle === 0) {
      minField.focus();
      minField.value = parseFloat(values[handle]).toFixed(accuracy);
      minField.blur();
    } else {
      maxField.focus();
      maxField.value = parseFloat(values[handle]).toFixed(accuracy);
      maxField.blur();
    }
  });

  slider.addEventListener('change', (evt) => {
    evt.target.id === minField.id ? sliderElement.noUiSlider.set([evt.target.value, null]) : sliderElement.noUiSlider.set([null, evt.target.value]);
  });
};

setSlider(slider, LimitValue.PRICE.MIN, LimitValue.PRICE.MAX, LimitValue.PRICE.STEP);
setSliderDependencies(slider, LimitValue.PRICE, FieldProperties.PRICE.ACCURACY);
