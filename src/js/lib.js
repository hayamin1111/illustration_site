import {gsap} from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

/**
 * @descroption gsapの設定
 */
export default () => {
  const bubble = document.getElementById('js-bubble01');
  gsap.timeline()
      .from(bubble, {xPercent: 100})
      .to(bubble, {
        ease: 'linear',
        duration: 14,
        motionPath: {
          path: '#bubblepath',
          align: '#bubblepath',
          autoRotate: true,
          start: 0,
          end: 1,
        },
      })
      .to(bubble, {
        xPercent: -100,
        opacity: 0,
        duration: 'back',
      })

}

