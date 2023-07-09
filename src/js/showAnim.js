import {gsap, Power4} from "gsap";
/**
 * @descroption マウスオーバー時の画像表示
 */
export default () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    const pickupContents = document.querySelectorAll('.js-pickupContent');
    let mouseX = 0;
    let mouseY = 0;
    if(pickupContents.length) {
      Array.from(pickupContents).forEach(function(content) {
        content.addEventListener('mouseenter', mouseEnterHandler, { passive: true });
        content.addEventListener('mouseleave', mouseLeaveHandler, { passive: true });
        content.addEventListener('mousemove', mouseMoveHandler, { passive: true });
      });
      function mouseEnterHandler(e) {
        let modal = this.querySelector('.js-modal');
        if(!modal.classList.contains('is-modalOpen')) {
          let image = this.querySelector('.js-pickupImage');
          let posContentX = this.getBoundingClientRect().left;
          let posContentY = this.getBoundingClientRect().top;
          let cursorX = e.clientX - posContentX;
          let cursorY = e.clientY - posContentY;
          let centerPointX = cursorX - image.clientWidth / 2;
          let centerPointY = cursorY - image.clientHeight / 2;
          image.classList.add('is-show');
          gsap.set(image, { x: centerPointX, y: centerPointY });
        }
      }
      function mouseLeaveHandler(e) {
        let image = this.querySelector('.js-pickupImage');
        image.classList.remove('is-show');
      }
      function mouseMoveHandler(e) {
        let modal = this.querySelector('.js-modal');
        if(!modal.classList.contains('is-modalOpen')) {
          let image = this.querySelector('.js-pickupImage');
          let posContentX = this.getBoundingClientRect().left;
          let posContentY = this.getBoundingClientRect().top;
          mouseX =  e.clientX - posContentX - image.clientWidth / 2;
          mouseY =  e.clientY - posContentY - image.clientHeight / 2;
          gsap.to(image, {
            duration: .7,
            x: mouseX,
            y: mouseY,
          })
        }
      } 
    }
  }
}

