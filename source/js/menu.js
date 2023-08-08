const MenuState = {
  MENU_OPENED: 'navigation--opened',
  MENU_CLOSED: 'navigation--closed',
  MENU_NO_JS: 'navigation--nojs'
}

const navigation = document.querySelector('.navigation');
const burger = document.querySelector('.navigation__toggle');

if (navigation && navigation.classList.contains(MenuState.MENU_NO_JS)) {
  navigation.classList.remove(MenuState.MENU_NO_JS);
  navigation.classList.add(MenuState.MENU_CLOSED);
}

const menuHandler = (evt) => {
  evt.preventDefault();

  if (navigation.classList.contains(MenuState.MENU_CLOSED)) {
    navigation.classList.remove(MenuState.MENU_CLOSED);
    navigation.classList.add(MenuState.MENU_OPENED);
  } else if (navigation.classList.contains(MenuState.MENU_OPENED)) {
    navigation.classList.remove(MenuState.MENU_OPENED);
    navigation.classList.add(MenuState.MENU_CLOSED);
  }
}

if (navigation && burger ) {
  burger.addEventListener('click', (evt) => menuHandler(evt));
}