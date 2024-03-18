import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

function swiper() {
    const swiper = new Swiper('.swiper', {
      spaceBetween: 12,
      slidesPerView: 2,
      loop: true,
  
      breakpoints: {
        740: {
          slidesPerView: 4,
          spaceBetween: 24,
        }
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
  
  });
}

export default swiper;