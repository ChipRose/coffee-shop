const MenuState = {
  OPENED: 'navigation--opened',
  CLOSED: 'navigation--closed',
  NO_JS: 'navigation--nojs'
}

const navigation = document.querySelector('.navigation');
const burger = document.querySelector('.navigation__toggle');

if (navigation && navigation.classList.contains(MenuState.NO_JS)) {
  navigation.classList.remove(MenuState.NO_JS);
  navigation.classList.add(MenuState.CLOSED);
}

const menuHandler = (evt) => {
  evt.preventDefault();

  if (navigation.classList.contains(MenuState.CLOSED)) {
    navigation.classList.remove(MenuState.CLOSED);
    navigation.classList.add(MenuState.OPENED);
  } else if (navigation.classList.contains(MenuState.OPENED)) {
    navigation.classList.remove(MenuState.OPENED);
    navigation.classList.add(MenuState.CLOSED);
  }
}

if (navigation && burger ) {
  burger.addEventListener('click', (evt) => menuHandler(evt));
}
