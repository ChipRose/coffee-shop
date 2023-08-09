const ButtonClass = {
  BUTTONS: '#pagination-list',
  BUTTON: '.button-pagination',
  CONTROL: '.button-pagination--control'
}

const ButtonState = {
  CURRENT: 'button-pagination--current',
  FORWARD: 'pagination-forward'
}

let INDEX_CURRENT = 1;

const paginationList = document.querySelector(ButtonClass.BUTTONS);
const paginationButtons = paginationList.querySelectorAll(ButtonClass.BUTTON);
const paginationNumberButtons = Array.from(paginationButtons).filter(({ textContent }) => Number(textContent));
const paginationControlButtons = Array.from(document.querySelectorAll(ButtonClass.CONTROL));

const paginationLength = paginationNumberButtons?.length;

const setStateControlButton = () => {
  if (paginationNumberButtons[0].classList.contains(ButtonState.CURRENT)) {
    paginationControlButtons[0].disabled = true;
    return;
  }
  if (paginationNumberButtons[paginationLength - 1].classList.contains(ButtonState.CURRENT)) {
    paginationControlButtons[1].disabled = true;
    return;
  }

  paginationControlButtons[0].disabled = false;
  paginationControlButtons[1].disabled = false;
}

const setCurrentButton = (buttonIndex) => {
  paginationNumberButtons.forEach(({ classList }, index) => {
    if (classList.contains(ButtonState.CURRENT)) {
      classList.remove(ButtonState.CURRENT)
      INDEX_CURRENT = index;
    }
  })

  paginationNumberButtons[buttonIndex].classList.add(ButtonState.CURRENT);
  setStateControlButton();
}

setCurrentButton(INDEX_CURRENT);

paginationList.addEventListener('click', (evt) => {
  evt.preventDefault();

  INDEX_CURRENT = paginationNumberButtons.findIndex(({ classList }) =>
    classList.contains(ButtonState.CURRENT)
  );

  if (Number(evt.target.textContent)) {
    setCurrentButton(Number(evt.target.textContent) - 1);
  } else if (evt.target.id === ButtonState.FORWARD) {
    INDEX_CURRENT < paginationLength - 1 ? INDEX_CURRENT++ : INDEX_CURRENT = paginationLength.length - 1;
    setCurrentButton(INDEX_CURRENT);
  } else {
    INDEX_CURRENT > 0 ? INDEX_CURRENT-- : INDEX_CURRENT = 0;
    setCurrentButton(INDEX_CURRENT);
  }
})