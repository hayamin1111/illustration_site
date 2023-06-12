import "normalize.css";
import '../css/app.scss';
import '../css/foundation/_variable.scss';
import '../css/foundation/_mixin.scss';
import '../css/foundation/_base.scss';
import '../css/layout/_index.scss';
import '../css/object/component/_index.scss';
import '../css/object/project/_index.scss';
import '../css/object/utility/_index.scss';
import Swiper from 'swiper/bundle';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/bundle';

//Swiper
const option = {
  loop: true,
  autoplay: true,
  slidesPerView: 3,
  speed: 300,
  grabCursor: true,
  spaceBetween: 24,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
}
const swiper = new Swiper('.swiper', option);
