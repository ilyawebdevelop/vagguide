import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.6.1.min.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);


// Burger
const btnMenu = document.querySelector('#toggle');
let btnMenuClose = document.querySelector('.btn-close');
const menu = document.querySelector('.header__nav');
const bodyEl = document.querySelector('body');

const menuLine1 = document.querySelector('.top-bun');
const menuLine2 = document.querySelector('.meat');
const menuLine3 = document.querySelector('.bottom-bun');

const toggleMenu = function () {
  menu.classList.toggle('open');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}

const toggleMenuLine = function () {
  menuLine1.classList.toggle('active');
  menuLine2.classList.toggle('active');
  menuLine3.classList.toggle('active');
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  toggleMenuLine();
});
// btnMenuClose.addEventListener('click', function (e) {
//   e.stopPropagation();
//   toggleMenu();
//   toggleBurger();
//   bodyOverflow();
//   toggleMenuLine();
// });

function formatState(state) {
  if (!state.id) {
    return state.text;
  }
  var baseUrl = "img/icons/";
  var $state = $(
    '<span class="image-wrapper"><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
  );
  return $state;
};

$(".js-example-templating").select2({
  templateResult: formatState
});


// project-slider
const projectSlider = document.querySelector('.project-slider');
var mySwiperProject = new Swiper(projectSlider, {
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 600,
  allowTouchMove: true,
  navigation: {
    nextEl: '.project-slider-sect .nav-arrow-right',
    prevEl: '.project-slider-sect .nav-arrow-left',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// retrofit-slider
const retrofitSlider = document.querySelector('.retrofit-slider');
var mySwiperRetrofit = new Swiper(retrofitSlider, {
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 600,
  allowTouchMove: true,
  navigation: {
    nextEl: '.retrofit-slider-sect .nav-arrow-right',
    prevEl: '.retrofit-slider-sect .nav-arrow-left',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// Инициализация слайдера baner-slider
const banerSlider = document.querySelector('.baner-slider');
var mySwiperBaner = new Swiper(banerSlider, {
  slidesPerView: 1,
  spaceBetween: 10,
  // loop: true,
  speed: 600,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.baner .pagination',
    clickable: true,
    type: 'bullets',
  },
  navigation: {
    nextEl: '.baner .nav-arrow-right',
    prevEl: '.baner .nav-arrow-left',
  },
});

// Инициализация слайдера reviews-slider
const reviewsSlider = document.querySelector('.reviews-slider');
var mySwiperReviews = new Swiper(reviewsSlider, {
  slidesPerView: 1,
  spaceBetween: 10,
  // loop: true,
  speed: 600,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.reviews .pagination',
    clickable: true,
    type: 'bullets',
  },
  navigation: {
    nextEl: '.reviews .nav-arrow-right',
    prevEl: '.reviews .nav-arrow-left',
  },
});

// update-slider
const updateSlider = document.querySelector('.update-slider');
var mySwiperUpdate = new Swiper(updateSlider, {
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 600,
  allowTouchMove: true,
  navigation: {
    nextEl: '.update-slider-sect .nav-arrow-right',
    prevEl: '.update-slider-sect .nav-arrow-left',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// chip-slider
const chipSlider = document.querySelector('.chip-slider');
var mySwiperChip = new Swiper(chipSlider, {
  slidesPerView: 5,
  spaceBetween: 40,
  speed: 600,
  allowTouchMove: true,
  navigation: {
    nextEl: '.chip-slider .nav-arrow-right',
    prevEl: '.chip-slider .nav-arrow-left',
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 5,
    },
  },
});

// socials-slider
const socialsSlider = document.querySelector('.socials-slider');
var mySwiperSocials = new Swiper(socialsSlider, {
  slidesPerView: 4,
  spaceBetween: 35,
  speed: 600,
  allowTouchMove: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1192: {
      slidesPerView: 4,
    },
  },
});

// categories-slider
const categoriesSlider = document.querySelector('.categories-slider');
var mySwiperCategories = new Swiper(categoriesSlider, {
  slidesPerView: 3,
  spaceBetween: 48,
  speed: 600,
  allowTouchMove: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1200: {
      spaceBetween: 48
    },
  },
});


// sleep-slider
const sleepSlider = document.querySelector('.sleep-slider');
var mySwiperSleep = new Swiper(sleepSlider, {
  slidesPerView: 4,
  spaceBetween: 45,
  speed: 600, 
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1192: {
      slidesPerView: 4,
    },
  },
});

const minMediaQuery992 = window.matchMedia('(min-width: 992px)');
const minMediaQuery768 = window.matchMedia('(min-width: 768px)');

let brandCards = document.querySelectorAll('.brands-item');
let brandCardsLength = brandCards.length;


if (minMediaQuery768.matches) {
  brandCards[brandCardsLength - 1]?.classList.add('bottom-b-0');
  brandCards[brandCardsLength - 2]?.classList.add('bottom-b-0');
  // brandCards[brandCardsLength - 3]?.classList.add('bottom-b-0');
}

if (minMediaQuery992.matches) {
  brandCards[brandCardsLength - 1]?.classList.add('bottom-b-0');
  brandCards[brandCardsLength - 2]?.classList.add('bottom-b-0');
  brandCards[brandCardsLength - 3]?.classList.add('bottom-b-0');
}







