import './utils/scroll-lock';
import './utils/focus-lock';
import {CustomSelect} from './vendor/custom-select/custom-select';
import {initAutoResizeTextarea} from './vendor/auto-resize-textarea';
import {StickyHeader} from './vendor/sticky-header';
import {Form} from './vendor/form-validate/form';
import {initBurgerMenu} from './modules/init-burger-menu';
import {initAccordions} from './modules/init-accordions';
import {initModals} from './modules/init-modals';
import {initSliderHero} from './modules/init-slider-hero';
import {initSliderPrograms} from './modules/init-slider-programs';
import {initSliderNews} from './modules/init-slider-news';
import {initSliderReviews} from './modules/init-slider-reviews';

window.addEventListener('DOMContentLoaded', () => {
  const stickyHeader = new StickyHeader();
  stickyHeader.init();
  initSliderHero();
  initSliderPrograms();
  initSliderNews();
  initSliderReviews();

  window.addEventListener('load', () => {
    initBurgerMenu();
    initAccordions();
    initModals();

    const select = new CustomSelect();
    select.init();

    initAutoResizeTextarea();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
