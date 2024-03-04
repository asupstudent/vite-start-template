import Swiper from 'swiper';
import { Scrollbar, Navigation } from 'swiper/modules';

const sliderPrograms = document.querySelector('[data-swiper="programs"]');
const buttonPrev = document.querySelector('[data-swiper="programs-button-prev"]');
const buttonNext = document.querySelector('[data-swiper="programs-button-next"]');
const scrollbar = document.querySelector('[data-swiper="programs-scrollbar"]');
const isMenuCurrent = 'site-nav__link--current';
const programsMenuLinksContainer = document.querySelector('[data-filter="programs-menu-links"]');
const programsMenuLinks = programsMenuLinksContainer.querySelectorAll('[data-menu-programs="burger-programs-link"]');

const setSliderPrograms = () => {
  new Swiper(sliderPrograms, {
    modules: [Scrollbar, Navigation],
    keyboard: true,
    scrollbar: {
      el: scrollbar,
      draggable: true,
      dragSize: 392,
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    slidesPerView: 'auto',
    breakpoints: {
      1440: {
        spaceBetween: 32,
        allowTouchMove: false,
      },
      768: {
        spaceBetween: 30,
        scrollbar: {
          dragSize: 324,
        },
      },
      320: {
        spaceBetween: 15,
        scrollbar: {
          el: '',
          enabled: false,
        },
      },
    },
  });
};

const onProgramsMenuLinksClick = (activeLink) => {
  programsMenuLinks.forEach((link) => link.classList.remove(isMenuCurrent));
  activeLink.classList.add(isMenuCurrent);
};


const onProgramsMenuLinksContainerClick = (evt) => {
  const currentLink = evt.target.closest('[data-menu-programs="burger-programs-link"]');
  if (currentLink) {
    if (!currentLink.classList.contains(isMenuCurrent)) {
      onProgramsMenuLinksClick(currentLink);
    }
  }
};

const initSliderPrograms = () => {
  if (document.body.contains(sliderPrograms)) {
    setSliderPrograms();
  }

  if (programsMenuLinksContainer && programsMenuLinks) {
    programsMenuLinksContainer.addEventListener('click', onProgramsMenuLinksContainerClick);
  }
};

export {initSliderPrograms};
