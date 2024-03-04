import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

const heroSlider = document.querySelector('[data-swiper="hero"]');

const setSliderHero = () => {
  const slider = new Swiper(heroSlider, {
    modules: [Autoplay, Pagination],
    pagination: {
      el: '.swiper-slide-active .hero__pagination',
      clickable: true,
      type: 'bullets',
      bulletElement: 'div',
      bulletClass: 'hero__pagination-bullet',
      bulletActiveClass: 'hero__pagination-bullet--active',
    },
    autoplay: {
      delay: 3000,
    },
    loop: true,
    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
    },
    on: {
      slideChangeTransitionStart: function () {
        slider.pagination.init();
        slider.pagination.render();
        slider.pagination.update();
      }
    }
  });
};

const initSliderHero = () => {
  if (document.body.contains(heroSlider)) {
    setSliderHero();
  }
};

export {initSliderHero};
