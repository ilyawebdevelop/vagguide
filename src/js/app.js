import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.6.1.min.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

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