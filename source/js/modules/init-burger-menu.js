const isMenuOpened = 'is-menu-opened';
const wrapper = document.querySelector('[data-menu="burger-wrapper"]');
const logo = document.querySelector('[data-menu="burger-logo"]');
const burgerButton = document.querySelector('[data-menu="burger-button"]');
const siteNav = document.querySelector('[data-menu="burger-site-nav"]');
const overlay = document.querySelector('[data-menu="burger-overlay"]');

const onSiteLinkClick = (evt) => evt.target.matches('[data-menu="burger-site-link"]') ? closeBurgerMenu() : null;

const onEscKeydown = (evt) => evt.key === 'Escape' ? closeBurgerMenu() : null;

const openBurgerMenu = () => {
  wrapper.classList.add(isMenuOpened);
  logo.classList.add(isMenuOpened);
  burgerButton.classList.add(isMenuOpened);
  siteNav.classList.add(isMenuOpened);
  overlay.classList.add(isMenuOpened);
  document.addEventListener('keydown', onEscKeydown);
  siteNav.addEventListener('click', onSiteLinkClick);
  overlay.addEventListener('click', closeBurgerMenu);
  window.scrollLock.disableScrolling();
  window.focusLock.lock('[data-menu="burger-site-nav"]', false);
};

const initBurgerMenu = () => {
  burgerButton.addEventListener('click', () => !burgerButton.classList.contains(isMenuOpened) ? openBurgerMenu() : closeBurgerMenu());
};

function closeBurgerMenu() {
  wrapper.classList.remove(isMenuOpened);
  logo.classList.remove(isMenuOpened);
  burgerButton.classList.remove(isMenuOpened);
  siteNav.classList.remove(isMenuOpened);
  overlay.classList.remove(isMenuOpened);
  document.removeEventListener('keydown', onEscKeydown);
  siteNav.removeEventListener('click', onSiteLinkClick);
  overlay.removeEventListener('click', closeBurgerMenu);
  window.scrollLock.enableScrolling();
  window.focusLock.unlock();
}

export {initBurgerMenu};
