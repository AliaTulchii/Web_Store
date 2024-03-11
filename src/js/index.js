import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
   
  });


// import mobileNav from './modules/mobile-nav';
// mobileNav();

import tagline from './modules/tagline-close';
tagline();

