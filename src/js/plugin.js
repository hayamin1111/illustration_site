import Swiper from 'swiper/bundle';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/bundle';

export default () => {
  //Swiper
  const option = {
    loop: true,
    autoplay: true,
    slidesPerView: 3,
    speed: 400,
    grabCursor: true,
    spaceBetween: 24,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }
  const swiper = new Swiper('.swiper', option);
}

