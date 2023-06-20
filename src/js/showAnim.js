import {gsap, Power4} from "gsap";
/**
 * @descroption マウスオーバー時の画像表示
 */
export default () => {
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
      console.log(e.target, e.currentTarget);
      let image = this.querySelector('.js-pickupImage');
      let posContentX = this.getBoundingClientRect().left;
      let posContentY = this.getBoundingClientRect().top;
      let cursorX = e.clientX - posContentX;
      let cursorY = e.clientY - posContentY;
      let centerPointX = cursorX - image.clientWidth / 2;
      let centerPointY = cursorY - image.clientHeight / 2;
      image.classList.add('is-show');

      gsap.set(image, { x: centerPointX, y: centerPointY });
      gsap.to(image, {
        duration: .3,
        autoAlpha: 1,
        skewX: 0,
        ease: Power4.out,
      })
    }
    function mouseLeaveHandler(e) {
      let image = this.querySelector('.js-pickupImage');
      gsap.to(image, {
        duration: .3,
        autoAlpha: 0,
        skewX: -30,
        ease: Power4.out,
        overwrite: true,
      })
      image.classList.remove('is-show');
    }
    function mouseMoveHandler(e) {
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
    //画像の上にmouseがのっていると、切り返されない 画像の上は除外したい
      
  }
}

