import Swiper from 'swiper';
import { Scrollbar, Navigation } from 'swiper/modules';

const sliderReviews = document.querySelector('[data-swiper="reviews"]');
const buttonPrev = document.querySelector('[data-swiper="reviews-button-prev"]');
const buttonNext = document.querySelector('[data-swiper="reviews-button-next"]');
const scrollbar = document.querySelector('[data-swiper="reviews-scrollbar"]');

const setSliderReviews = () => {
  new Swiper(sliderReviews, {
    modules: [Scrollbar, Navigation],
    keyboard: true,
    spaceBetween: 20,
    scrollbar: {
      el: scrollbar,
      draggable: true,
      dragSize: 392,
      hide: false,
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      1440: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        scrollbar: {
          dragSize: 324,
        },
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
        scrollbar: {
          el: '',
          enabled: false,
        },
      },
    },
  });
};

const initSliderReviews = () => {
  if (document.body.contains(sliderReviews)) {
    setSliderReviews();
  }
};

export {initSliderReviews};
