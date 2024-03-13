import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

function swiper() {
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
  
  });
}

export default swiper;