import Swiper from 'swiper';
import {Manipulation, Grid, Navigation, Pagination } from 'swiper/modules';

const newsSlider = document.querySelector('[data-swiper="news"]');
const buttonPrev = document.querySelector('[data-swiper="news-button-prev"]');
const buttonNext = document.querySelector('[data-swiper="news-button-next"]');
const newsPagination = document.querySelector('[data-swiper="news-pagination"]');
const isActive = 'is-active';
const buttonContainer = document.querySelector('[data-news="button-container"]');
const newsButtons = buttonContainer.querySelectorAll('[data-name="news-button"]');
const newsSlide = document.querySelectorAll('[data-news="slide"]');
const isMenuCurrent = 'site-nav__link--current';
const newsMenuLinksContainer = document.querySelector('[data-filter="news-menu-links"]');
const newsMenuLinks = newsMenuLinksContainer.querySelectorAll('[data-menu-news="burger-news-link"]');

let slider;

const setSliderNews = () => {
  slider = new Swiper(newsSlider, {
    modules: [Manipulation, Grid, Navigation, Pagination],
    pagination: {
      el: newsPagination,
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${ className }">${ index + 1 }</span>`;
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    observer: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    grid: {
      rows: 1,
    },
    breakpoints: {
      1440: {
        spaceBetween: 32,
        grid: {
          rows: 1,
        },
      },
      768: {
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      },
      320: {
        spaceBetween: 20,
        grid: {
          rows: 2,
        },
      },
    },
  });
};

const onNewsButtonClick = (activeButton) => {
  newsButtons.forEach((button) => button.classList.remove(isActive));
  activeButton.classList.add(isActive);
};

const updateNewsSlider = (filter) => {
  slider.slides.forEach((slide) => {
    const slideFilter = slide.dataset.filter;
    const isShowSlide = filter === 'all' || slideFilter === filter;
    if(!isShowSlide) {
      slide.remove();
    }
  });
};

const updateSlider = () => {
  slider.removeAllSlides();
  slider.appendSlide(newsSlide);
  slider.update();
};

const onButtonContainerClick = (evt) => {
  updateSlider();
  const currentButton = evt.target.closest('[data-name="news-button"]');
  if (currentButton) {
    if (!currentButton.classList.contains(isActive)) {
      onNewsButtonClick(currentButton);
    }
  }
  const filter = currentButton.dataset.filter || 'all';
  updateNewsSlider(filter);
};

const onNewsMenuLinksClick = (activeLink) => {
  newsMenuLinks.forEach((link) => link.classList.remove(isMenuCurrent));
  activeLink.classList.add(isMenuCurrent);
};

const onNewsMenuLinksContainerClick = (evt) => {
  updateSlider();
  const currentLink = evt.target.closest('[data-menu-news="burger-news-link"]');
  if (currentLink) {
    if (!currentLink.classList.contains(isMenuCurrent)) {
      onNewsMenuLinksClick(currentLink);
    }
  }
  const filter = currentLink.dataset.filter || 'all';
  updateNewsSlider(filter);
  const targetBtn = buttonContainer.querySelector(`[data-filter="${filter}"]`);
  if (targetBtn) {
    if (!targetBtn.classList.contains(isActive)) {
      onNewsButtonClick(targetBtn);
    }
  }
};

const initSliderNews = () => {
  if (document.body.contains(newsSlider)) {
    setSliderNews();

    if (buttonContainer && newsButtons) {
      buttonContainer.addEventListener('click', onButtonContainerClick);
    }

    if (newsMenuLinksContainer && newsMenuLinks) {
      newsMenuLinksContainer.addEventListener('click', onNewsMenuLinksContainerClick);
    }
  }
};

export {initSliderNews};
