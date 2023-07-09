import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default () => {
  //Swiper
  const option = {
    loop: true,
    autoplay: true,
    slidesPerView: 3,
    speed: 400,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 24,
      }
    }
  }
  const swiper = new Swiper('.swiper', option);
}

