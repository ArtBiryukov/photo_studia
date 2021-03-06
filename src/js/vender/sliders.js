import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const sliders = () => {
  new Swiper('.works__slider', {
    slidesPerView: 3,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    modules: [Navigation, Pagination, Autoplay],

    navigation: {
      nextEl: '.works__slider-btn-next',
      prevEl: '.works__slider-btn-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    autoplay: {
      delay: 3000,
    },
  });

  new Swiper('.locations__slider-container', {
    slidesPerView: 1,
    autoHeight: true,
    modules: [Navigation, Autoplay],
    loop: true,

    navigation: {
      nextEl: '.locations__btn-next',
      prevEl: '.locations__btn-prev',
      disabledClass: 'slider__button-disabled',
    },

    breakpoints: {
      665: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      936: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

      1340: {
        slidesPerView: 3,
        spaceBetween: 27.5,
      },
    },

    autoplay: {
      delay: 3000,
    },
  });

  new Swiper('.reviews__slider', {
    slidesPerView: 1,
    loop: true,
    slideActiveClass: 'slider__slide-active',
    autoHeight: true,

    modules: [Navigation, Autoplay],

    navigation: {
      nextEl: '.revies-button-next',
      prevEl: '.revies-button-prev',
    },

    breakpoints: {
      730: {
        slidesPerView: 2,
        spaceBetween: 21,
      },

      1240: {
        slidesPerView: 3,
        spaceBetween: 16,
        centeredSlides: true,
        initialSlide: 1,
        loop: true,
      },
    },

    autoplay: {
      delay: 3000,
    },
  });
};

export default sliders;
